<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>学生年龄：{{ myAge + 1 }}</h2>
    <button @click="updateAge">尝试修改收到的年龄</button>
  </div>
</template>

<script>
export default {
  name: 'Student',
  data () {
    console.log(this)
    return {
      msg: '我是一个尚硅谷的学生',
      myAge: this.age,
    }
  },
  methods: {
    updateAge () {
      this.myAge++
    },
  },
  // 简单声明接收
  // 备注：props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data中的数据。

  // props:['name','age','sex']      // Vue读取数据的时候，会先读取props里的（也就是具有优先级），然后再读取data中的

  //接收的同时对数据进行类型限制
  /* props:{
    name:String,
    age:Number,
    sex:String
  } */

  //接收的同时对数据：进行类型限制+默认值的指定+必要性的限制
  props: {
    name: {
      type: String, //name的类型是字符串
      required: true, //name是必要的
    },
    age: {
      type: Number,
      default: 99, //默认值   required和default不要一起出现
    },
    sex: {
      type: String,
      required: true,
    },
  },
}
</script>