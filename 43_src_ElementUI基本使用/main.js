// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// ElementUI完整引入
// 引入ElementUI组件库
// import ElementUI from 'element-ui'
// 引入ElementUI全部样式
// import 'element-ui/lib/theme-chalk/index.css'

// ElementUI按需引入
// 注意：如果是完整引入，需要引入css文件；按需引入则不需要引入css文件，项目内部会自动根据main.js中的需求引入和babel.config.js中的配置来调用css完整样式中的部分样式。
import { Button, Row, DatePicker } from 'element-ui'
//关闭Vue的生产提示
Vue.config.productionTip = false
// Button.name这种就是对应el-button,可以自己起名字
Vue.component(Button.name, Button)
Vue.component(Row.name, Row)
Vue.component(DatePicker.name, DatePicker)

// 全局应用ElementUI
// Vue.use(ElementUI)
//创建vm
new Vue({
  el: '#app',
  render: h => h(App),
})