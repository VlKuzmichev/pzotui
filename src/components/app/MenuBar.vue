<template>
  <div class="tabs-fixed-width">
    <ul class="row">
      <router-link
          v-for="link in links" :key="link.url"
          tag="li" active-class="active"
          :to="link.url"
          :exact="link.exact">
        <div class="link">
          <a href="#"
             class="col waves-effect waves-light">{{ link.title }}</a>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    links: [
      {title: 'Главная', url: '/', exact: true},
      {title: 'Мои тесты', url: '/myTests'},
      {title: 'Настройка тестов', url: '/tests'},
      {title: 'Группы студентов', url: '/groupsStudents'},
      {title: 'Пользователи', url: '/users'},
      {title: 'Группы пользователей', url: '/groupUsers'}
    ]
  })
}
</script>

<style scoped>
ul {
  background: #af0404;
}

a {
  font-size: 1.2em;
  background: #af0404;
  color: white;
}

.router-link-exact-active a {
  background: #820202;
  color: lightgray;
}

.link > a {
  padding-top: 5px;
  padding-bottom: 5px;
}

/*.router-link-exact-active a{*/
/*  background: yellow;*/
/*  border-radius: 5px;*/
/*  color: red;*/
/*}*/
</style>
