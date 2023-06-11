<template>
  <div class="container">

    <Category title="游戏">
      <!--<template scope="atguigu">-->
      <template v-slot="atguigu">
        <!--
        上面atguigu收到的是：
        { "games": [ "红色警戒", "穿越火线", "劲舞团", "超级玛丽" ], "msg": "hello" }
        所以下面得到数据用 atguigu.games
        -->
        <ul>
          <li v-for="(g,index) in atguigu.games" :key="index">{{ g }}</li>
        </ul>
      </template>
    </Category>

    <!--用下面这种写法简单些-->
    <Category title="游戏">
      <template scope="{games}">    <!-- scope="{games:games} -->
        <!-- 上面是简写的，比如写成 scope="{games:youxis} 下面把games改成youxis也行（解构赋值） -->
        <ol>
          <li style="color:red" v-for="(g,index) in games" :key="index">{{ g }}</li>
        </ol>
      </template>
    </Category>

    <Category title="游戏">
      <template slot-scope="{games}">  <!-- 用v-slot也行 -->
        <h4 v-for="(g,index) in games" :key="index">{{ g }}</h4>
      </template>
    </Category>

  </div>
</template>

<script>
import Category from './components/Category'

export default {
  name: 'App',
  components: { Category },
}
</script>

<style scoped>
.container, .foot {
  display: flex;
  justify-content: space-around;
}

h4 {
  text-align: center;
}
</style>
