<template>
  <div class="modal-main">
    <div class="modal-content">
      <div>{{ error_message }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ErrorModal"
//  props: ['error_message']
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
  height: 170px;
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
