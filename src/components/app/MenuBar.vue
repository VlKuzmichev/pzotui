<template>
  <div class="tabs-fixed-width">
    <ul class="row white">
      <router-link
          v-for="link in links" :key="link.url"
          tag="li" active-class="active"
          :to="link.url"
          :exact="link.exact">
        <div class="link"><a href="#"
                             class="col  waves-effect waves-light #c62828 red darken-3 white-text">{{ link.title }}</a>
        </div>
      </router-link>
      <!--        <router-link tag="li" active-class="active"-->
      <!--                     to="/myTests" exact>-->
      <!--          <a href="#" class="waves-effect waves-light pointer">Мои тесты</a>-->
      <!--        </router-link>-->
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
.link > a {
  padding: 10px;
  font-size: 1.2em;
}
</style>
