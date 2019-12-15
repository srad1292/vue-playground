import Vue from 'vue'
import App from './App.vue'
import navRouter from './routes/index';

Vue.config.productionTip = false

new Vue({
  router: navRouter,
  render: h => h(App),
}).$mount('#app')
