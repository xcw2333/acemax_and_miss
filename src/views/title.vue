<template>
  <div class="title_box">
    <span
      >Missの后台管理系统<em>当前用户为:{{ type_quan }}</em></span
    >
    <div class="user_right">
      <!-- 选中active:default-active="activeIndex" -->
      <el-menu
        class="el-menu-demo user_zujian"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-menu-item index="2">消息管理</el-menu-item>
        <el-menu-item index="3">退出登陆</el-menu-item>
      </el-menu>
      <div class="line"></div>
    </div>
  </div>
</template>
<script>
import widths from "../javascript/width";
export default {
  data() {
    return {
      type_quan: "",
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      if (key == 3) {
        window.localStorage.zh = "";
        window.localStorage.mi = "";
        window.localStorage.type = "";
        window.localStorage.name = "";
        this.$router.push({
          path: "/",
        });
        this.$router.go(0)
      }
    },
  },
  created() {
    if (this.$store.name != undefined) {
      this.type_quan = this.$store.name;
    } else {
      this.type_quan = window.localStorage.name;
    }
  },
  mounted() {
    widths(".title_box");
  },
};
</script>
<style scoped src='../style/title.css'></style>