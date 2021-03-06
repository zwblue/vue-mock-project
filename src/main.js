// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import store from './store'
import 'iview/dist/styles/iview.css'
import '../static/common.css'
import('./utils/globalFunction')// 定义全局方法。//import 与下面的import 有冲突，用require顺利解决问题
require('./utils/globalComponent')// 定义全局组件。

Vue.use(iView)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
