<template>
  <div class="box">
    <span>当前用户为{{ type_quan }}</span>
    <el-menu
      default-active="0"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >

      <el-submenu index="0">
        <template slot="title">总管理</template>
        <el-menu-item index="0-1">角色一览</el-menu-item>
      </el-submenu>

      <el-menu-item index="1"> <span slot="title">高级管理</span> </el-menu-item
      ><el-menu-item index="2">
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
      type_quan: "",
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  created() {
    if (this.$store.name != undefined) {
      this.type_quan = this.$store.name;
    } else {
      this.type_quan = window.localStorage.name;
    }
  },
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
  background: white;
  width: 220px;
  height: 92vh;
}
</style>