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
      {title: 'Тестирование', url: '/myTests'},
      {title: 'Управление тестами', url: '/tests'},
      {title: 'Группы студентов', url: '/studentGroups'},
      {title: 'Пользователи', url: '/users'},
      {title: 'Группы пользователей', url: '/userGroups'}
    ]
  })
}
</script>

<style scoped>
ul {
  background: #676666;
}

a {
  font-size: 1.2em;
  background: #676666;
  color: white;
}

.router-link-exact-active a {
  background: #323232;
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
