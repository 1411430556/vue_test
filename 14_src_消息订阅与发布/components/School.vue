<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
  name: 'School',
  data () {
    return {
      name: '尚硅谷',
      address: '北京',
    }
  },
  methods: {
    // msgName是订阅名（这里就是hello），data就是传递的数据
    demo (msgName, data) {
      console.log('hello消息收到了', msgName, data)
    },
  },
  mounted () {
    this.pubId = pubsub.subscribe('hello', this.demo)
  },
  beforeDestroy () {
    pubsub.unsubscribe(this.pubId)
  },
}
</script>

<style scoped>
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>