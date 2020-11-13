import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/* 直接引入common.css 不同调用 */
import '@/assets/css/common.css'
import '@/assets/js/rem.js'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
