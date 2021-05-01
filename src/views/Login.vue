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
        <label for="username">Имя пользователя</label>
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
    username: '',
    password: '',
    users: []
  }),
  methods: {
    async submitHandler() {
      //let encoded = window.btoa(this.username + ':' + this.password);
      let auth = 'Basic ' + window.btoa(this.username + ':' + this.password);
      let uri = "http://localhost:8081/";
      let headers = new Headers();
      headers.append('Accept', 'application/json');
      headers.append('Authorization', auth);
      let request = new Request(uri, {
        method: 'GET',
        headers: headers,
        credentials: 'same-origin'
      });
      await fetch(request)
          // .then((resp) => {
          //   if (resp.ok) {
          //     return resp.json()
          //   } else {
          //     throw new Error('Bad HTTP Stuff')
          //   }
          //
          //})
         //  .then(user => {
         //    // login successful if there's a user in the response
         //    if (user) {
         //      // store user details and basic auth credentials in local storage
         //      // to keep user logged in between page refreshes
         // //     user.authdata = window.btoa(this.username + ':' + this.password);
         //  //    localStorage.setItem('user', JSON.stringify(user));
         //    }
         //    return user;
         //  })
          localStorage.setItem('user', JSON.stringify(window.btoa(this.username + ':' + this.password)))
          .then((jsonData) => {
            console.log(jsonData);
          })
      // if (resp.ok) {
      //   console.log('Ok')
      //   console.log(await resp)
      //   //console.log(await resp.)
      // }
      //  await fetch('http://localhost:8081/users', {
      //   method: 'POST',
      //   headers: {'Authorization': 'Basic ' + 'dXNlcjpwYXNzd29yZA=='},
      //  'Content-Type': 'application/json',
      // body: JSON.stringify(formData),
      //   "mode": "cors"
      //  })//.then(json => console.log(json));
      // console.log(formData);
      //   await this.$router.push('/users');
    }
  }
};
</script>


<style lang="css">
@import '../assets/index.css';

</style>
