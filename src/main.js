import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
//引入样式文件
import "./stylesheets/main.scss"
//引入mint-ui
import { Button, Lazyload, Swipe, SwipeItem } from 'mint-ui';
//引入axios
import axios from "axios"
Vue.use(Lazyload)
Vue.component("mt-swipe", Swipe);
Vue.component("mt-swipe-item", SwipeItem);
Vue.prototype.$http = axios
Vue.component("mt-button", Button)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
