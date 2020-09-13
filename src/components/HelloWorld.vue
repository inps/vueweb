<template>
  <div class="hello">
    <el-table :data="checkList">
    <el-table-column prop="pid" label="pid" ></el-table-column>
    <el-table-column prop="name" label="name" ></el-table-column>
    <el-table-column prop="introduce" label="introduce" ></el-table-column>
    <el-table-column prop="price" label="price" ></el-table-column>
    </el-table>
     <div class="block">
      <span class="demonstration"></span>
      <el-pagination
        @size-change="handleSizeChange"   
        @current-change="handleCurrentChange"
        :current-page="1"
        :page-sizes="[2, 4]"
        :page-size="5"
        layout="total, sizes, prev, pager, next, jumper"
        :total="checkList.length"
      >
      </el-pagination>
    </div>
        <el-button  type="primary">按钮</el-button>
    <h1/>
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
      ...mapActions(['changeListValue', 'handleDel','getInfo']),
    handleSizeChange(val) {
      this.limitePage.limit = val;
    },
    handleCurrentChange(val) {
      this.limitePage.page = val
    }
    },

    mounted() {
       this.getInfo()
      // console.log(a)
    }
  }
</script>