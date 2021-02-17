<template>
  <nav class="blue-grey">
    <div class="nav-wrapper">
      <ul class="left">
        <router-link tag="li" active-class="active"
                     to="/myTests" exact>
          <a href="#" class="waves-effect waves-light pointer">Мои тесты</a>
        </router-link>
        <router-link tag="li" active-class="active"
                     to="/tests" exact>
          <a href="#" class="waves-effect waves-light pointer">Настройка тестов</a>
        </router-link>
        <router-link tag="li" active-class="active"
                     to="/groupsStudents" exact>
          <a href="#" class="waves-effect waves-light pointer">Группы студентов</a>
        </router-link>
        <router-link tag="li" active-class="active"
                     to="/users" exact>
          <a href="#" class="waves-effect waves-light pointer">Пользователи</a>
        </router-link>
        <router-link tag="li" active-class="active"
                     to="/groupUsers" exact>
          <a href="#" class="waves-effect waves-light pointer">Группы пользователей</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>
