<template>
  <div class="modal-main">
    <div class="modal-content">

      <div class="row">
        <h5 class="title-modal center">{{ isNew ? "Новая группа" : "Редактирование группы" }}</h5>
      </div>

      <div class="row">
        <div class="input-field">
          <input id="name" type="text" placeholder="Наименование" v-model="editedUserGroup.name">
        </div>
      </div>

      <div class="row">
        <a href="#" class="btn btn-small black waves-effect waves-light left" v-on:click="saveUserGroup">Сохранить
          <i class="material-icons right">send</i>
        </a>
        <a href="#" class="btn btn-small red waves-effect waves-light right" v-on:click="closeGroupModal">Отмена
          <i class="material-icons right">block</i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "EditUserGroupModal",
  props: {
    group: {},
    isNewUserGroup: Boolean,
  },
  data() {
    return {
      isModalVisible: '',
      editedUserGroup: this.group,
      isNew: this.isNewUserGroup,
    }
  },
  created() {
    return {}
  },
  methods: {
    closeGroupModal() {
      this.$emit("closeGroupModal", this.isModalVisible);
      this.isModalVisible = false;
    },
    async saveUserGroup() {
      let auth = JSON.parse(localStorage.getItem('user'));
      let headers = new Headers();
      headers.append('Accept', 'application/json');
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization', 'Basic ' + auth);
      if (this.isNew) {
        try {
          let request = new Request("http://localhost:8081/userGroups/", {
            method: 'POST',
            body: JSON.stringify(this.editedUserGroup),
            headers: headers,
          });
          const res = await fetch(request);
          this.editedUserGroup = await res.json();
          if (res.ok) {
            this.$emit("changeUserGroup", this.editedUserGroup);
            this.closeGroupModal();
          }
        } catch (error) {
          console.error('Ошибка:', error);
        }
      } else {
        try {
          const request = new Request('http://localhost:8081/userGroups/' + this.editedUserGroup.id, {
            method: 'PUT',
            body: JSON.stringify(this.editedUserGroup),
            headers: headers,
//            credentials: 'same-origin'
          });
          let res = await fetch(request);
          if (res.ok) {
            this.$emit("changeUserGroup", this.editedUserGroup);
            this.closeGroupModal();
          }
        } catch (error) {
//          console.error('Ошибка:', error);
        }
      }
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
  height: 270px;
  background-color: white;
  border-radius: 4px;
}

</style>
