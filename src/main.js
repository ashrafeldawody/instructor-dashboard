import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import i18n from './i18n'
import store from './store'
import vuetify from './plugins/vuetify';
import router from './router'
import VueToast from 'vue-toast-notification';
//import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-sugar.css';
Vue.use(VueToast);

Vue.config.productionTip = false

new Vue({
  i18n,
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
