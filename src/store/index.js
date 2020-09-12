import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    inputVal: 'lily',
    list: ['1', '2', '3']
  },
  mutations: {
    changeListValue(state, inputVal) {
      state.list.push(inputVal)
      state.inputVal = ''
    },
    handleDel(state, idx) {
      state.list.splice(idx, 1)
    }
  },
  actions: {
    changeListValue: ({commit}, inputVal) => {
      return commit('changeListValue', inputVal)
    },
    handleDel: ({commit}, idx) => {
      return commit('handleDel', idx)
    }
  }
})
export default store