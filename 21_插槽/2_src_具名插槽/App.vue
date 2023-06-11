<template>
  <div class="container">
    <Category title="美食">
      <!--title没加冒号相当于传了个字符串过去，加了冒号就是js表达式-->
      <img slot="center" src="https://img95.699pic.com/photo/50127/2945.jpg_wh860.jpg" alt="">
      <a slot="footer" href="http://www.atguigu.com" class="food">更多美食</a>
    </Category>

    <Category title="游戏">
      <ul slot="center">
        <li v-for="(g,index) in games" :key="index">{{ g }}</li>
      </ul>
      <div class="foot" slot="footer">
        <a href="http://www.atguigu.com">单机游戏</a>
        <a href="http://www.atguigu.com">网络游戏</a>
      </div>
    </Category>

    <Category title="电影">
      <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
      <template v-slot:footer>
        <!--<template #footer>  可以用#号代替v-slot:-->
        <!--  v-slot只能在template里使用  -->
        <div class="foot">
          <a href="http://www.atguigu.com">经典</a>
          <a href="http://www.atguigu.com">热门</a>
          <a href="http://www.atguigu.com">推荐</a>
        </div>
        <h4>欢迎前来观影</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from './components/Category'

export default {
  name: 'App',
  components: { Category },
  data () {
    return {
      foods: ['火锅', '烧烤', '小龙虾', '牛排'],
      games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
      films: ['《教父》', '《拆弹专家》', '《你好，李焕英》', '《尚硅谷》'],
    }
  },
}
</script>

<style scoped>
.container, .foot {
  display: flex;
  justify-content: space-around;
}

h4 {
  text-align: center;
  text-emphasis: filled pink;

  /*
  text-emphasis 属性是简写属性，用于在一个声明中设置 text-emphasis-style 和 text-emphasis-color。
  text-emphasis-style：	向元素的文本应用重点标记。
  text-emphasis-color：	定义重点标记的前景色。
  */
}
</style>
