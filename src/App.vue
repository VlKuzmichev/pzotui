<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import EmptyLayout from "@/layouts/EmptyLayout";
import MainLayout from "@/layouts/MainLayout";

export default {
  computed: {
    layout() {
//      console.log(this.$route.meta)
      return (this.$route.meta.layout || 'empty') + '-layout';
    }
  },
  components: {
    EmptyLayout, MainLayout
  }
}
</script>

<style lang="css">
@import '~materialize-css/dist/css/materialize.min.css';
@import 'assets/main.css';
@import '~material-icons/iconfont/material-icons.css';
</style>
