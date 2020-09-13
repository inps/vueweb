<template>
  <div class="hello">
    <h1>{{$store.state.checkList}}</h1>
    <input v-model="$store.state.inputVal" type="text">
    <button @click="changeListValue(inputVal)">增加事项</button>
    <ul v-for="(item, idx) in list" :key="item.key">
      <li @click="handleDel(idx)">{{item}}</li>
    </ul>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  export default {
    name: 'HelloWorld',
    computed: {
      ...mapState(['list', 'inputVal','checkList'])
    },
    methods: {
      ...mapActions(['changeListValue', 'handleDel','getInfo'])
    },

    mounted() {
        this.getInfo()
    }
  }
</script>