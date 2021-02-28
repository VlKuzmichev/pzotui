<template>
  <div>
    <h5 class="center">Управление пользователями</h5>
    <a href="#" class="btn-small #212121 grey darken-4 white-text"> Добавить </a>
    <table class="striped centered">
      <thead>
      <tr>
        <th>Имя пользователя</th>
        <th>E-mail адрес</th>
        <th>ФИО</th>
        <th>Роли</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr class="users" v-for="user in allUsers" :key="user.id">
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.fullName }}</td>
        <td>
          <ul>
            <li v-for="role in user.roles" :key="role.id">
              {{ role }}
            </li>
          </ul>
        </td>
        <td>
          <a href="#">
            <i class="material-icons black-text">security</i>
          </a>
        </td>
        <td>
          <a href="#">
            <i class="material-icons black-text">edit</i>
          </a>
        </td>
        <td>
          <a href="#">
            <i class="material-icons black-text">group</i>
          </a>
        </td>
        <td>
          <a href="#">
            <i class="material-icons red-text">delete_forever</i>
          </a>
        </td>
      </tr>
      </tbody>
    </table>
    <ul class="pagination">
      <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
      <li class="active"><a href="#!">1</a></li>
      <li class="waves-effect"><a href="#!">2</a></li>
      <li class="waves-effect"><a href="#!">3</a></li>
      <li class="waves-effect"><a href="#!">4</a></li>
      <li class="waves-effect"><a href="#!">5</a></li>
      <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
    </ul>
  </div>
  <!--  </div>-->
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'Users',
  computed: mapGetters(["allUsers"]),
  methods: mapActions(["fetchUsers"]),
  async mounted() {
    //this.$store.dispatch("fetchUsers");
    await this.fetchUsers();
  }
};
</script>

<style scoped>

td {
  font-size: 1.3em;
}

tr td ul {
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 0;
  padding-bottom: 0;
}

li > a {
  font-size: 1.3em;
}

h5 {
  font-weight: bold;
}

</style>
