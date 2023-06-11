//该文件用于创建Vuex中最为核心的store
// 引入Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'

// 应用Vuex插件
Vue.use(Vuex)

//准备actions——用于响应组件中的动作
const actions = {
  /*
    content有上下文的意思，所以上面就是dispatch(没用)，下面就是commit
    context身上还有state（存放数据的地方）
   */

  /*   jia (context, value) {
      context.commit('JIA', value)
    },
    jian (context, value) {
      context.commit('JIAN', value)
    },
  */
  jiaOdd (context, value) {
    if (context.state.sum % 2) {
      context.commit('JIA', value)
    }
  },
  jiaWait (context, value) {
    setTimeout(() => {
      context.commit('JIA', value)
    }, 500)
  },
}

//准备mutations——用于操作数据（state）
const mutations = {
  /*
  这里的state相当于迷你版的store(miniStore)
  身上直接存放有state中的数据sum
   */
  JIA (state, value) {
    state.sum += value
  },
  JIAN (state, value) {
    state.sum -= value
  },
}

//准备state——用于存储数据
const state = {
  sum: 0, //当前的和
}

export default new Vuex.Store({
  actions,
  mutations,
  state,
})