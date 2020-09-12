<template>
  <div class="hello">
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
      ...mapState(['list', 'inputVal'])
    },
    methods: {
      ...mapActions(['changeListValue', 'handleDel'])
    }
  }
</script>