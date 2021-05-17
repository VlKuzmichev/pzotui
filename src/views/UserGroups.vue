<template>
  <div class="row">
    <h5 class="center">Группы пользователей</h5>
        <a href="#" class="btn btn-small black waves-effect waves-light left" v-on:click="addUserGroup">Добавить
          <i class="material-icons right">add</i>
        </a>
    <table class="striped centered">
      <thead>
      <tr>
        <th>Наименование группы</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr class="users" v-for="group in groups" :key="group.id">
        <td>{{ group.name }}</td>
        <td>
        </td>
        <td>
          <a href="#">
            <i class="material-icons black-text" title="Редактировать" v-on:click="fetchUserGroup(group)">edit</i>
          </a>
        </td>
        <td>
          <a href="#">
            <i class="material-icons red-text" title="Удалить" v-on:click="deleteUserGroup(group)">delete_forever</i>
          </a>
        </td>
      </tr>
      </tbody>
    </table>
<!--    <ul class="pagination">-->
<!--      <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>-->
<!--      <li class="active"><a href="#!">1</a></li>-->
<!--      <li class="waves-effect"><a href="#!">2</a></li>-->
<!--      <li class="waves-effect"><a href="#!">3</a></li>-->
<!--      <li class="waves-effect"><a href="#!">4</a></li>-->
<!--      <li class="waves-effect"><a href="#!">5</a></li>-->
<!--      <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>-->
<!--    </ul>-->
        <EditUserGroupModal :group="group" :isNewUserGroup="isNewUserGroup"
                   v-if="isModalVisible" @closeGroupModal="closeGroupModal" @changeUserGroup="changeUserGroup"/>
  </div>

</template>

<script>
import EditUserGroupModal from "@/components/popap/EditUserGroupModal";

export default {
  name: "UserGroups",
  data() {
    return {
      group: {},
      groups: [],
      isModalVisible: false,
      isNewUserGroup: false
    }
  },
  components: {EditUserGroupModal},
  async created() {
    let auth = JSON.parse(localStorage.getItem('user'));
    const URI = "http://localhost:8081/";
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Authorization', 'Basic ' + auth);
    let request = new Request(URI + "userGroups", {
      method: 'GET',
      headers: headers,
    });
    const resp = await fetch(request);
    if (resp.ok) {
      this.groups = await resp.json();
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
    closeGroupModal(isModalVisible)
    {
      this.isModalVisible = isModalVisible;
    },
    changeUserGroup(group) {
      if (this.isNewUserGroup) {
        this.groups.push(group)
      } else {
        this.group = group;
        this.groups = this.groups.filter(g => g.id !== this.group.id);
        this.groups.push(group)
      }
    },
    addUserGroup() {
      this.group = {};
      this.group.name = "";
      this.isModalVisible = true;
      this.isNewUserGroup = true;
    },
    async fetchUserGroup(group) {
      let auth = JSON.parse(localStorage.getItem('user'));
      let headers = new Headers();
      headers.append('Accept', 'application/json');
      headers.append('Authorization', 'Basic ' + auth);
      let request = new Request("http://localhost:8081/userGroups/" + group.id, {
        method: 'GET',
        headers: headers,
      });
      const res = await fetch(request);
      if (res.ok) {
        this.group = await res.json();
        this.isModalVisible = true;
        this.isNewUserGroup = false;
      } else {
        // this.isErrorVisible = true;
        // this.error_message = "Ошибка связи. Не удается загрузить группы пользователей";
      }
    },
    async deleteUserGroup(group) {
      let auth = JSON.parse(localStorage.getItem('user'));
      let headers = new Headers();
      headers.append('Accept', 'application/json');
      headers.append('Authorization', 'Basic ' + auth);
      let request = new Request("http://localhost:8081/userGroups/" + group.id, {
        method: 'DELETE',
        headers: headers,
      });
      const res = await fetch(request);
      if (res.ok) {
        this.groups.splice(this.groups.indexOf(group), 1);
      } else {
        //  this.isErrorVisible = true;
        //  this.error_message = "Не найден элемент: " + user.id;
      }
    }
  }

}
</script>

<style>
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
