<template>
  <form class="card auth-card">
    <div class="card-content">
      <span class="card-title">Авторизация</span>
      <div class="input-field">
        <input
            id="login"
            type="text"
            class="validate"
        >
        <label for="login">Имя пользователя</label>
<!--        <small class="helper-text invalid">Имя пользователя</small>-->
      </div>
      <div class="input-field">
        <input
            id="password"
            type="password"
            class="validate"
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

<style lang="css">
/*@import '../assets/index.css';*/

</style>
