import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import elm from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import Vue_resource from 'vue-resource'
Vue.config.productionTip = false
Vue.use(elm);
Vue.use(Vue_resource);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
