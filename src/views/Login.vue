<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <span class="card-title">Авторизация</span>
      <div class="input-field">
        <input
            id="username"
            type="text"
            class="validate"
            v-model="username"
        >
<!--        <label for="username">Имя пользователя</label>-->
                <small class="helper-text">Имя пользователя</small>
      </div>
      <div class="input-field">
        <input
            id="password"
            type="password"
            class="validate"
            v-model="password"
        >
<!--        <label for="password">Пароль</label>-->
                <small class="helper-text">Пароль</small>
      </div>
      <div class="helper-text invalid" v-if="auth_error">Неверное имя пользователя или пароль</div>
    </div>
    <div class="card-action">
      <div>
        <button
            class="btn waves-effect waves-light red auth-submit"
            type="submit"
        >
          Войти
          <i class="material-icons right">send</i>
        </button>
      </div>
    </div>
  </form>

</template>

<script>
export default {
  name: 'login',
  data: () => ({
    auth_error: '',
    username: '',
    password: '',
  }),
  methods: {
    async submitHandler() {
      let auth = 'Basic ' + window.btoa(this.username + ':' + this.password);
      let uri = "http://localhost:8081/";
      let headers = new Headers();
      headers.append('Accept', 'application/json');
      headers.append('Authorization', auth);
      let request = new Request(uri, {
        method: 'GET',
        headers: headers,
      });
      const resp = await fetch(request).catch(error => alert(error.message));
      if (resp.status === 200) {
        localStorage.setItem('user', JSON.stringify(window.btoa(this.username + ':' + this.password)));
        await this.$router.push('/');
      } else {
        if (resp.status === 401) {
          this.auth_error = true;
        }
        localStorage.removeItem('user');
      }
    }
  }
};
</script>

<style lang="css">
@import '../assets/index.css';

</style>
