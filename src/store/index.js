import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    inputVal: 'lily',
    list: ['1', '2', '3'],
    checkList:[]
  },
  mutations: {
    changeListValue(state, inputVal) {
      state.list.push(inputVal)
      state.inputVal = ''
    },
    handleDel(state, idx) {
      state.list.splice(idx, 1)
    },
    changeList(state,res){   // store中的数据只能通过commit mutation来改变
        state.checkList = res.data.data.list
    }


  },
  actions: {
    changeListValue: ({commit}, inputVal) => {
      return commit('changeListValue', inputVal)
    },
    handleDel: ({commit}, idx) => {
      return commit('handleDel', idx)
    },
    
    getInfo(context) {
        axios.get('https://easy-mock.com/mock/5d41481656e5d340d0338e4b/shop/commodity')
            .then(res => {
                context.commit('changeList',res)
                console.log(res.data)
            }).catch(err => {
                console.log(err)
            })
    }
  
  }
})
export default store