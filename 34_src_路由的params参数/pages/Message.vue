<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- 跳转路由并携带params参数，to的字符串写法 -->
        <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link> -->

        <!-- 跳转路由并携带params参数，to的对象写法 -->
        <router-link :to="{
          /*
           如果用params形式携带参数，这里只能用name，不能用path。
           并且需要在路由配置文件index.js里使用占位符申明接收params参数，如：path: 'detail/:id/:title',
           */
					name:'xiangqing',
					params:{
						id:m.id,
						title:m.title
					}
				}">
          {{ m.title }}
        </router-link>

      </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Message',
  data () {
    return {
      messageList: [
        { id: '001', title: '消息001' },
        { id: '002', title: '消息002' },
        { id: '003', title: '消息003' },
      ],
    }
  },
}
</script>