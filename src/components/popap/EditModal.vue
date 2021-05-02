<template>
  <div class="modal-main">
    <div class="modal-content">

      <div class="row">
        <h5 class="title-modal center">{{ isNew ? "Новый пользователь" : "Редактирование пользователя" }}</h5>
      </div>

      <div class="row">
        <div class="input-field">
          <input id="fullName" type="text" placeholder="ФИО" v-model="editedUser.fullName">
        </div>
        <div class="input-field">
          <input id="login" type="text" placeholder="Логин" v-model="editedUser.name">
        </div>
        <div class="input-field">
          <input id="email" type="text" placeholder="E-mail" v-model="editedUser.email">
        </div>
      </div>

      <div class="row group">
        <div class="input-field">
          <div>Выбор группы</div>
          <select class="user-groups" v-model="editedUser.group.name">
            <option v-for="(userGroup, key) in userGroups" :key="key">{{ userGroup.name }}</option>
          </select>
        </div>
      </div>

      <div class="row">
        <div class="input-field">
          <div>Роли в системе</div>
          <div class="col md-12" v-for="(role, index) in userRoles" :key="index">
            <label :for="role.name">
              <input type="checkbox" class="form-check form-check-inline" :id="role.name" v-model="role.checked">
              <span>{{ role.title }}</span>
            </label>
          </div>
        </div>
      </div>

      <div class="row">
        <a href="#" class="btn btn-small black waves-effect waves-light left" v-on:click="saveUser">Сохранить
          <i class="material-icons right">send</i>
        </a>
        <a href="#" class="btn btn-small red waves-effect waves-light right" v-on:click="closeUserModal">Отмена
          <i class="material-icons right">block</i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "EditModal",
  props: {
    user: {},
    isNewUser: Boolean,
    groups: Array,
    roles: Array
  },
  data() {
    return {
      isModalVisible: '',
      editedUser: this.user,
      isNew: this.isNewUser,
      userGroups: this.groups,
      userRoles: this.roles
    }
  },
  created() {
    return {}
  },
  methods: {
    closeUserModal() {
      this.$emit("closeModal", this.isModalVisible);
      this.isModalVisible = false;
    },
    async saveUser() {
      this.editedUser.roles = this.userRoles
          .filter(rl => rl.checked === true)
          .map(rl => rl.name);
      this.editedUser.group = this.userGroups.filter(gr => gr.name === this.editedUser.group.name)[0];
      let auth = JSON.parse(localStorage.getItem('user'));
      let headers = new Headers();
      headers.append('Accept', 'application/json');
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization', 'Basic ' + auth);
      if (this.isNew) {
        try {
          let request = new Request("http://localhost:8081/users/", {
            method: 'POST',
            body: JSON.stringify(this.editedUser),
            headers: headers,
            credentials: 'same-origin'
          });
          const res = await fetch(request);
          this.editedUser = await res.json();
          this.$emit("changeUser", this.editedUser);
          this.closeUserModal();
        } catch (error) {
//          console.error('Ошибка:', error);
        }
      } else {
        try {
          let request = new Request('http://localhost:8081/users/' + this.editedUser.id, {
            method: 'PUT',
            body: JSON.stringify(this.editedUser),
            headers: headers,
            credentials: 'same-origin'
          });
          await fetch(request);
          this.$emit("changeUser", this.editedUser);
          this.closeUserModal();
        } catch (error) {
//          console.error('Ошибка:', error);
        }
      }
    },
    logg() {
      console.log(this.userRoles)
    }
  }
}
</script>

<style scoped>

.modal-main {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  /*display: none;*/
  justify-content: center;
  align-items: center;
  z-index: 15;
  display: flex;
}

.modal-content {
  padding: 15px 35px;
  width: 650px;
  height: 570px;
  background-color: white;
  border-radius: 4px;
}

.user-groups {
  display: block;
}

.user-groups:hover {
  background-color: #f1f1f1;
}

</style>
