import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
import { Button, MessageBox } from 'element-ui';
import * as API from '@/api'
import 'swiper/css/swiper.css'
import VueLazyload from 'vue-lazyload' //图片懒加载
import imgurl from '@/assets/6.jpg'
// import { reqSearchList } from '@/api/index'
// reqSearchList({})
Vue.use(VueLazyload, {
  loading: imgurl
})

//自定义插件
// import plugins from '@/plugins/myplugins'
// Vue.use(plugins, {
//   name: 'upper'
// })
import validate from '@/plugins/validate'
Vue.config.productionTip = false
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
Vue.component(Pagination.name, Pagination)
// Vue.component(MessageBox.name, MessageBox)
Vue.component(Button.name, Button)

new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate() {
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
    Vue.prototype.$alert = MessageBox.alert;
    Vue.prototype.$msgbox = MessageBox;
  },
}).$mount('#app')
