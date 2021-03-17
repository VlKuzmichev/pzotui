<template>
  <div class="modal-main">
    <div class="modal-content">
      <div class="row">
        <h5>Добавление (Редактирование) пользователя</h5>
      </div>
      <div class="row">
        <div class="input-field">
          <input id="fullName" type="text" placeholder="ФИО">
        </div>
        <div class="input-field">
          <input id="login" type="text" placeholder="Логин">
        </div>
        <div class="input-field">
          <input id="email" type="text" placeholder="E-mail">
        </div>
      </div>
      <div class="row group">
        <div class="input-field">
          <select class="user-groups">
            <option selected value="Чебурашка">Электромеханники</option>
            <option value="Крокодил Гена">Старшие электромеханники</option>
            <option value="Шапокляк">Начальники участков</option>
          </select>
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
  </div>
</template>

<script>
export default {
  name: "EditModal",
  methods: {
    closeUserModal() {
      const userModal = document.querySelector('.modal-main');
      userModal.style.display = 'none';
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
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 15;
}

.modal-content {
  padding: 15px 35px;
  width: 700px;
  height: 500px;
  background-color: white;
  border-radius: 4px;
}

.user-groups {
  display: block;
  color: white;
  background-color: #989797;
}

.user-groups:hover {
  background-color: #676666;
}

.btn-small {
  margin-top: 45px;
}
</style>
