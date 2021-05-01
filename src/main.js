import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'materialize-css/dist/js/materialize.min'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
