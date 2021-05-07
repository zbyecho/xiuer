/*
 * @Date: 2021-05-03 14:03:05
 * @LastEditors: zhangbaoyan
 * @LastEditTime: 2021-05-06 10:08:48
 * @FilePath: /h5work/my-app/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import ElementUi from './components/elemenUi'
import './assets/css/reast.css'
import 'element-ui/lib/theme-chalk/index.css';


for (const key in ElementUi) {
  if (Object.hasOwnProperty.call(ElementUi, key)) {
    const element = ElementUi[key];
    Vue.use(element)
  }
}

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
