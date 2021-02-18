<template>
  <nav class="white">
    <div class="nav-wrapper">
      <ul class="blue-grey left">
        <router-link
            v-for="link in links" :key="link.url"
            tag="li" active-class="active"
            :to="link.url"
            :exact="link.exact">
          <a href="#" class="waves-effect waves-light pointer">{{link.title}}</a>
        </router-link>
        <!--        <router-link tag="li" active-class="active"-->
        <!--                     to="/myTests" exact>-->
        <!--          <a href="#" class="waves-effect waves-light pointer">Мои тесты</a>-->
        <!--        </router-link>-->
      </ul>
    </div>
  </nav>
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
