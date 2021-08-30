<template>
  <div class="home_box">
    <!-- hello这里是首页组件 当前用户为{{ type_quan }} -->
    <titles></titles>
    <div class="contents">
      <celab @types='get_type'></celab>
      <component :is="zujinas"></component>
    </div>
  </div>
</template>
<style scoped src='../style/home.css'></style>
<script>
import celab from "../views/left_box.vue";
import titles from "../views/title.vue";
import no_view from "../views/no_view.vue";
import richang from "../views/richang.vue";
export default {
  data() {
    return {
      type_quan: "",
      zujinas: "richang",
    };
  },
  created() {
    if (this.$store.name != undefined) {
      this.type_quan = this.$store.name;
    } else {
      this.type_quan = window.localStorage.name;
    }
    if (window.localStorage.name == undefined) {
      this.$router.push({
        path: "/",
      });
    }
  },
  methods:{
    get_type(data){
      // 取到单独的值
      console.log(data)
    }
  },
  components: {
    celab,
    titles,
    no_view,
    richang,
  },
};
</script>