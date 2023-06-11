<template>
  <ul>
    <li>消息编号：{{ id }}</li>
    <li>消息标题：{{ title }}</li>
    <li>固定信息①：{{ a }}</li>
    <li>固定信息②：{{ b }}</li>
  </ul>
</template>

<script>
export default {
  name: 'Detail',
  props: ['id', 'title', 'a', 'b'],
  computed: {
    // id(){
    // 	return this.$route.query.id
    // },
    // title(){
    // 	return this.$route.query.title
    // },
  },
  mounted () {
    console.log(this.$route)
  },
}
</script>