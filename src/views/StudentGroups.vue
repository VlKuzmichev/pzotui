<template>
  <div class="row">
    <h5 class="center">Группы студентов</h5>
    <a href="#" class="btn btn-small black waves-effect waves-light left" v-on:click="addStudentGroup">Добавить
      <i class="material-icons right">add</i>
    </a>
    <table class="striped">
      <thead>
      <tr>
        <th>Наименование группы</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="studentGroup in studentGroups" :key="studentGroup.id">
        <td>{{ studentGroup.name }}</td>
        <td>
        </td>
        <td>
          <a href="#">
            <i class="material-icons black-text" title="Редактировать" v-on:click="fetchStudentGroup(studentGroup)">edit</i>
          </a>
        </td>
        <td>
          <a href="#">
            <i class="material-icons red-text" title="Удалить" v-on:click="deleteStudentGroup(studentGroup)">delete_forever</i>
          </a>
        </td>
      </tr>
      </tbody>
    </table>
    <EditStudentGroupModal :studentGroup="studentGroup" :isNewStudentGroup="isNewStudentGroup"
                        v-if="isModalVisible" @closeStudentGroupModal="closeStudentGroupModal" @changeStudentGroup="changeStudentGroup"/>
  </div>

</template>

<script>
import EditStudentGroupModal from "@/components/popap/EditStudentGroupModal";

export default {
  name: "StudentGroups",
  data() {
    return {
      studentGroup: {},
      studentGroups: [],
      isModalVisible: false,
      isNewStudentGroup: false
    }
  },
  components: {EditStudentGroupModal},
  async created() {
    let auth = JSON.parse(localStorage.getItem('user'));
    const URI = "http://localhost:8081/";
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Authorization', 'Basic ' + auth);
    let request = new Request(URI + "studentGroups", {
      method: 'GET',
      headers: headers,
    });
    const resp = await fetch(request);
    if (resp.ok) {
      this.studentGroups = await resp.json();
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
    closeStudentGroupModal(isModalVisible)
    {
      this.isModalVisible = isModalVisible;
    },
    changeStudentGroup(studentGroup) {
      if (this.isNewStudentGroup) {
        this.studentGroups.push(studentGroup)
      } else {
        this.studentGroup = studentGroup;
        this.studentGroups = this.studentGroups.filter(g => g.id !== this.studentGroup.id);
        this.studentGroups.push(studentGroup)
      }
    },
    addStudentGroup() {
      this.studentGroup = {};
      this.studentGroup.name = "";
      this.isModalVisible = true;
      this.isNewStudentGroup = true;
    },
    async fetchStudentGroup(studentGroup) {
      let auth = JSON.parse(localStorage.getItem('user'));
      let headers = new Headers();
      headers.append('Accept', 'application/json');
      headers.append('Authorization', 'Basic ' + auth);
      let request = new Request("http://localhost:8081/studentGroups/" + studentGroup.id, {
        method: 'GET',
        headers: headers,
      });
      const res = await fetch(request);
      if (res.ok) {
        this.studentGroup = await res.json();
        this.isModalVisible = true;
        this.isNewStudentGroup = false;
      } else {
        // this.isErrorVisible = true;
        // this.error_message = "Ошибка связи. Не удается загрузить группы пользователей";
      }
    },
    async deleteStudentGroup(studentGroup) {
      let auth = JSON.parse(localStorage.getItem('user'));
      let headers = new Headers();
      headers.append('Accept', 'application/json');
      headers.append('Authorization', 'Basic ' + auth);
      let request = new Request("http://localhost:8081/studentGroups/" + studentGroup.id, {
        method: 'DELETE',
        headers: headers,
      });
      const res = await fetch(request);
      if (res.ok) {
        this.studentGroups.splice(this.studentGroups.indexOf(studentGroup), 1);
      } else {
        //  this.isErrorVisible = true;
        //  this.error_message = "Не найден элемент: " + user.id;
      }
    }
  }

}
</script>

<style scoped>

.row {
  padding-left: 20px;
  padding-right: 20px;
}

tr td ul {
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 0;
  padding-bottom: 0;
}

h5 {
  font-weight: bold;
}

</style>
