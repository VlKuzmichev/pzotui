<template>
  <div class="row">
    <h5 class="center">Управление пользователями</h5>
    <a href="#" class="btn btn-small black waves-effect waves-light left" v-on:click="addUser">Добавить
      <i class="material-icons right">add</i>
    </a>
    <table class="striped">
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
      <tr class="users" v-for="user in users" :key="user.id">
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
            <i class="material-icons black-text" title="Сменить пароль">vpn_key</i>
          </a>
        </td>
        <td>
          <a href="#">
            <i class="material-icons black-text" title="Редактировать" v-on:click="fetchUser(user)">edit</i>
          </a>
        </td>
        <td>
          <a href="#">
            <i class="material-icons red-text" title="Удалить" v-on:click="deleteUser(user)">delete_forever</i>
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
    <EditUserModal :user="user" :isNewUser="isNewUser" :groups="groups" :roles="roles"
               v-if="isModalVisible" @closeModal="closeModal" @changeUser="changeUser"/>
  </div>
</template>

<script>
import EditUserModal from "@/components/popap/EditUserModal";

export default {
  name: 'Users',
  data() {
    return {
      error_message: '',
      users: [],
      user: {},
      groups: [],
      isModalVisible: false,
      isErrorVisible: false,
      roles: [
        {
          name: 'ROLE_USER',
          title: 'Пользователь',
          checked: null
        },
        {
          name: 'ROLE_EXAMINER',
          title: 'Проверяющий',
          checked: null
        },
        {
          name: 'ROLE_ADMIN',
          title: 'Администратор',
          checked: null
        },
      ],
      isNewUser: false
    }
  },
  components: {EditUserModal},
  async created() {
    let auth = JSON.parse(localStorage.getItem('user'));
    const URI = "http://localhost:8081/";
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Authorization', 'Basic ' + auth);
    let request = new Request(URI + "users", {
      method: 'GET',
      headers: headers,
    });
    const resp = await fetch(request);
    if (resp.ok) {
      this.users = await resp.json();
      let request_for_groups = new Request("http://localhost:8081/userGroups", {
        method: 'GET',
        headers: headers,
      });
      const group_req = await fetch(request_for_groups);
      if (group_req.ok) {
        this.groups = await group_req.json();
      } else {
        this.error_message = "Ошибка связи. Не удается загрузить группы пользователей";
      }
    } else {
      if (resp.status === 403) {
        await this.$router.push('/');
      }
      if (resp.status === 401) {
        await this.$router.push('/login');
      }
    }
  },
  methods: {
    closeModal(isModalVisible) {
      this.isModalVisible = isModalVisible;
    },
    changeUser(user) {
      if (this.isNewUser) {
        this.users.push(user)
      } else {
        this.user = user;
        this.users = this.users.filter(u => u.id !== this.user.id);
        this.users.push(user)
      }
    },
    addUser() {
      this.user = {};
      this.user.name = "";
      this.user.email = "";
      this.user.password = null;
      this.user.fullName = "";
      this.user.group = {};
      this.user.roles = this.roles.forEach(sr => sr.checked = false);
      this.isModalVisible = true;
      this.isNewUser = true;
    },
    async fetchUser(user) {
      let auth = JSON.parse(localStorage.getItem('user'));
      let headers = new Headers();
      headers.append('Accept', 'application/json');
      headers.append('Authorization', 'Basic ' + auth);
      let request = new Request("http://localhost:8081/users/" + user.id, {
        method: 'GET',
        headers: headers,
      });
      const res = await fetch(request);
      if (res.ok) {
        this.user = await res.json();
        this.isModalVisible = true;
        this.roles.forEach(sr => sr.checked = false);
        this.user.roles.forEach(ur =>
            this.roles.forEach(rl =>
                rl.name === ur ? rl.checked = true : false
            )
        )
        this.isNewUser = false;
      } else {
        // this.isErrorVisible = true;
        // this.error_message = "Ошибка связи. Не удается загрузить группы пользователей";
      }
    },
    async deleteUser(user) {
      let auth = JSON.parse(localStorage.getItem('user'));
      let headers = new Headers();
      headers.append('Accept', 'application/json');
      headers.append('Authorization', 'Basic ' + auth);
      let request = new Request("http://localhost:8081/users/" + user.id, {
        method: 'DELETE',
        headers: headers,
      });
      const res = await fetch(request);
      if (res.ok) {
        this.users.splice(this.users.indexOf(user), 1);
      } else {
        //  this.isErrorVisible = true;
        //  this.error_message = "Не найден элемент: " + user.id;
      }
    }
  },
};
</script>

<style>

.row {
  padding-left: 20px;
  padding-right: 20px;
}

td {
  font-size: 1.3em;
}

tr td ul {
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 0;
  padding-bottom: 0;
}

/*li > a {*/
/*  font-size: 1.3em;*/
/*}*/

h5 {
  font-weight: bold;
}

</style>
