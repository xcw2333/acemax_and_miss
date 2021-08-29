<template>
  <div class="title_box">
    <span>Missの后台管理系统</span>
    <div class="user_right">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo user_zujian"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-menu-item index="2">消息管理</el-menu-item>
      </el-menu>
      <div class="line"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style scoped src='../style/title.css'></style>