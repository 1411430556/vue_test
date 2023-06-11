<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color:red">Count组件求和为：{{ sum }}</h3>
    <h3>列表中第一个人的名字是：{{firstPersonName}}</h3>
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="add">添加</button>
    <button @click="addWang">添加一个姓王的人</button>
    <button @click="addPersonSever">添加一个人，名字随机</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  name: 'Person',
  data () {
    return {
      name: '',
    }
  },
  computed: {
    ...mapState('personAbout', ['personList']),
    ...mapState('countAbout', ['sum']),
    ...mapGetters('personAbout', ['firstPersonName'])
  },
  methods: {
    // 下面这个如果不是使用...mapMutations这种写法，那就这样写来找到路径 this.$store.commit('personAbout/ADD_PERSON',personObj)
    ...mapMutations('personAbout', ['ADD_PERSON']),   // 相当于帮我们生成了下面这段代码（可以看成一个语法糖）
    /* ADD_PERSON(personObj){
      this.$store.commit('ADD_PERSON',personObj)
    }, */
    ...mapActions('personAbout', ['addPersonWang', 'addPersonSever']),

    add () {
      const personObj = { id: nanoid(), name: this.name }
      // this.$store.commit('ADD_PERSON',personObj)
      this.ADD_PERSON(personObj)   // 这里的参数personObj就传到了上面的函数ADD_PERSON
      this.name = ''
    },
    addWang () {
      const personObj = { id: nanoid(), name: this.name }
      this.addPersonWang(personObj)
      this.name = ''
    },
  },
}
</script>
