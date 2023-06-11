<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color:red">Count组件求和为：{{sum}}</h3>
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="add">添加</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Person',
  data () {
    return {
      name: '',
    }
  },
  computed: {
    // personList(){
    // 	return this.$store.state.personList
    // },
    // sum(){
    // 	return this.$store.state.sum
    // }
    ...mapState(['personList', 'sum']),
  },
  methods: {
    ...mapMutations(['ADD_PERSON']),   // 相当于帮我们生成了下面这段代码（可以看成一个语法糖）
    /* ADD_PERSON(personObj){
      this.$store.commit('ADD_PERSON',personObj)
    }, */
    add () {
      const personObj = { id: nanoid(), name: this.name }
      // this.$store.commit('ADD_PERSON',personObj)
      this.ADD_PERSON(personObj)   // 这里的参数personObj就传到了上面的函数ADD_PERSON
      this.name = ''
    },
  },
}
</script>
