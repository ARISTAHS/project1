import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { BootstrapVue, IconsPlugin } from  'bootstrap-vue' 
import  'bootstrap/dist/css/bootstrap.css' 
import  'bootstrap-vue/dist/bootstrap-vue.css' 


Vue.config.productionTip = false

// 프로젝트 전체에서 BootstrapVue를 사용할 수 있도록 합니다. 
Vue.use(BootstrapVue) // 선택적으로 BootstrapVue 아이콘 구성 요소 플러그인을 설치합니다. 
Vue.use(IconsPlugin)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

