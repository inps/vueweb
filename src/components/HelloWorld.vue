<template>
  <div class="hello">
    <el-table :data="checkList.slice((currentPage-1)*pagesize,currentPage*pagesize)">
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
        :current-page="currentPage"
        :page-sizes="[2, 4]"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="checkList.length"
      >
      </el-pagination>
    </div>

    <h1/>
    <el-col :span="8">
    <ul v-for="(item, idx) in list" :key="item.key">
      <li @click="handleDel(idx)">{{item}}</li>
    </ul>
    </el-col>
    <el-col :span="8">
    <el-input v-model="$store.state.inputVal"   placeholder="请输入内容" type="text"/> 
    </el-col>
    <el-col :span="8">
    <el-button @click="changeListValue(inputVal)" type="primary">增加事项</el-button>
     </el-col>

    
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  export default {
    name: 'HelloWorld',
    data() {
    return {
      currentPage: 1,
      pagesize: 2,

    };
  },
    computed: {
      ...mapState(['list', 'inputVal','checkList'])
    },
    methods: {
      ...mapActions(['changeListValue', 'handleDel','getInfo']),
    handleSizeChange(val) {
      this.pagesize  = val;
      this.currentPage = 1;
    },
    handleCurrentChange(val) {
       this.currentPage  = val
    }
    },

    mounted() {
       this.getInfo()
      // console.log(a)
    }
  }
</script>