<template>
  <div>
    <button @click="getStudents">获取学生信息</button>
    <button @click="getCars">获取汽车信息</button>
  </div>
</template>

<script>
import axios from 'axios'
// 代理服务器配置在 vue.config.js 文件里

export default {
  name: 'App',
  methods: {
    getStudents () {
      // 下面的url，是链接到了public目录下，比如写  http://localhost:8080/favicon.ico  就会拿到这个图标
      // 相当于是8080端口的根目录
      axios.get('http://localhost:8080/atguigu/students').then(
          response => {
            console.log('请求成功了', response.data)
          },
          error => {
            console.log('请求失败了', error.message)
          },
      )
    },
    getCars () {
      axios.get('http://localhost:8080/demo/cars').then(
          response => {
            console.log('请求成功了', response.data)
          },
          error => {
            console.log('请求失败了', error.message)
          },
      )
    },
  },
}
</script>
