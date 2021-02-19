<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <span class="card-title">Авторизация</span>
      <div class="input-field">
        <input
            id="login"
            type="text"
            class="validate"
            v-model="login"
        >
        <label for="login">Имя пользователя</label>
<!--        <small class="helper-text invalid">Имя пользователя</small>-->
      </div>
      <div class="input-field">
        <input
            id="password"
            type="password"
            class="validate"
            v-model="password"
        >
        <label for="password">Пароль</label>
<!--        <small class="helper-text invalid">Password</small>-->
      </div>
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
    login: '',
    password: ''
  }),
  methods: {
    submitHandler(){
      const formData = {
        login: this.login,
        password: this.password
      }

      console.log(formData);
      this.$router.push('/');
    }
  }
};
</script>



<style lang="css">
@import '../assets/index.css';

</style>
