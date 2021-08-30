<template>
  <div class="box">
    <el-menu
      default-active="10"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-submenu index="0" v-if="z_root">
        <template slot="title">总管理</template>
        <el-menu-item index="0-1">角色一览</el-menu-item>
      </el-submenu>
      <!-- <el-menu-item v-for="(i,index) in left_name" :key="index" :index='i+1'> <span slot="title" @click="click_tiao(index)">{{i}}</span> </el-menu-item> -->
      <el-menu-item index="2" @click="zhongji">
        <span slot="title">中级管理</span> </el-menu-item
      ><el-menu-item index="3">
        <span slot="title">低级管理</span> </el-menu-item
      ><el-menu-item index="4">
        <span slot="title">第五阶管理</span> </el-menu-item
      ><el-menu-item index="5">
        <span slot="title">第六阶管理</span> </el-menu-item
      ><el-menu-item index="6">
        <span slot="title">第七阶段管理</span> </el-menu-item
      ><el-menu-item index="7">
        <span slot="title">第八阶段管理</span> </el-menu-item
      ><el-menu-item index="8">
        <span slot="title">第九阶段管理</span> </el-menu-item
      ><el-menu-item index="9">
        <span slot="title">第十阶段管理</span> </el-menu-item
      ><el-menu-item index="10">
        <span slot="title">日常</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
        z_root:false,
        left_name:['中级管理','低级管理','第五阶段管理','第六阶段管理','第七阶段管理','第八阶段管理','第九阶段管理','第十阶段管理','日常'],
        types:''
    };
  },
  created(){
    if(window.localStorage.name=='总管理'||window.localStorage.type=='10'){
      this.z_root=true
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    click_tiao(index){
      console.log(this.left_name[index])
    },


    // 十个右边选项栏

    // 明天任务在这这里需要把权限列表传到父组件并且在父组件判断当前点击的东西用户有没有权限来查看

    zhongji(){
        this.types='中级管理'
        this.$emit('types',this.types)
    }
  },
  mounted(){
      // 特殊的事件(上面可以使用v-for来循环没有循环)
  }
};
</script>

<style scoped>
@charset "utf-8";
/*清除默认样式*/
* {
  margin: 0;
  padding: 0;
}
ul,
ol {
  list-style-type: none;
}
input,
textarea,
select,
button {
  outline: none;
  background-color: transparent;
  border: none;
}
em,
i {
  font-style: normal;
}
a {
  text-decoration: none;
}
/* 去掉图片下的间距 */
img {
  vertical-align: top;
}
/*清浮动*/
.clearfix:after,
.clearfix:before {
  content: "";
  display: table;
}
.clearfix:after {
  clear: both;
}

.box {
  background: #545c64;
  width: 220px;
  height: 92vh;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>