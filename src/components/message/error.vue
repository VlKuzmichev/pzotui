<template>
  <div class="error"> {{ err }}</div>
</template>

<script>
export default {
  name: "error",
  props: {
    error: null
  },
  data() {
    return {
      err: this.error
    }
  }
}
</script>

<style scoped>

.error {
  width: 100%;
  height: 1.5em;
  background-color: darkred;
}


</style>
