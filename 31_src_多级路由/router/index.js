// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
// 引入组件
import About from '@/pages/About.vue'
import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import Message from '@/pages/Message.vue'

export default new VueRouter({
  // 注意是：routes，而且后面是跟的一个数组
  routes: [
    {
      path: '/about',
      // 注意这里是component，没有加s
      component: About,
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          // 这里特别注意，二级路由这里写路径就不加 斜杠/ 了
          path: 'news',
          component: News,
        },
        {
          path: 'message',
          component: Message,
        },
      ],
    },
  ],
})