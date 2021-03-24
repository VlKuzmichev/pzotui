<template>
  <div class="modal-main">
    <div class="modal-content">
      <div class="row">
        <h5>Редактирование пользователя</h5>
      </div>
      <div class="row">
        <div class="input-field">
          <input id="fullName" type="text" placeholder="ФИО" :value="getUser.fullName">
        </div>
        <div class="input-field">
          <input id="login" type="text" placeholder="Логин" :value="getUser.name">
        </div>
        <div class="input-field">
          <input id="email" type="text" placeholder="E-mail" :value="getUser.email">
        </div>
      </div>
      <div class="row group">
        <div class="input-field">
          <div>Выбор группы</div>
          <select class="user-groups" v-if="getUser.group !== undefined" v-model="getUser.group.name">
            <option v-for="userGroup in allUserGroups" :key="userGroup.id" >{{ userGroup.name }}</option>
          </select>
        </div>
      </div>
      <div class="row group">
        <div class="input-field">
          <div>Роли в системе</div>
          <div class="col md-12">
            <label>
              <input type="checkbox" checked="checked"/>
              <span>Пользователь</span>
            </label>
          </div>
          <div class="col md-12">
            <label>
              <input type="checkbox"/>
              <span>Проверяющий</span>
            </label>
          </div>
          <div class="col md-12">
            <label>
              <input type="checkbox"/>
              <span>Главный проверяющий</span>
            </label>
          </div>
          <div class="col md-12">
            <label>
              <input type="checkbox"/>
              <span>Администратор</span>
            </label>
          </div>
          <div class="col md-12">
            <label>
              <input type="checkbox"/>
              <span>Главный администратор</span>
            </label>
          </div>
        </div>
      </div>
      <div class="row">
        <a href="#" class="btn btn-small black waves-effect waves-light left">Сохранить
          <i class="material-icons right">send</i>
        </a>
        <a href="#" class="btn btn-small red waves-effect waves-light right" v-on:click="closeUserModal()">Отмена
          <i class="material-icons right">block</i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>

import {mapGetters} from 'vuex'

export default {
  name: "EditModal",
  methods: {
    closeUserModal() {
      const userModal = document.querySelector('.modal-main');
      userModal.style.display = 'none';
    }
  },
  computed: mapGetters(["allUserGroups", "getUser", "getSelected"]),

  // computed: {
  //   allUserGroups() {
  //     return this.$store.getters.allUserGroups;
  //   }
  // }
}
</script>

<style scoped>

.modal-main {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 15;
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
