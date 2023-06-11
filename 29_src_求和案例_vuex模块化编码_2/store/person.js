import axios from 'axios'
import { nanoid } from 'nanoid'

export default {
  // 人员相关配置
    namespaced: true,
    actions: {
      addPersonWang (context, value) {
        if (value.name.indexOf('王') === 0) {
          context.commit('ADD_PERSON', value)
        } else {
          alert('输入的人名必须姓王！')
        }
      },
      addPersonSever (context) {
        axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
          Response => {
            context.commit('ADD_PERSON',{id:nanoid(),name:Response.data})
          },
          Error => {
            alert(Error.message)
          }
        )
      }
    },
    mutations: {
      ADD_PERSON (state, value) {
        console.log('mutations中的ADD_PERSON被调用了')
        state.personList.unshift(value)
      },
    },
    state: {
      personList: [
        { id: '001', name: '张三' },
      ],
    },
    getters: {
      firstPersonName(state) {
        return state.personList[0].name
      }
    },
  }