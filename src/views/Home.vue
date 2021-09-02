<template>
  <div class="home_box">
    <!-- hello这里是首页组件 当前用户为{{ type_quan }} -->
    <titles></titles>
    <div class="contents">
      <celab @types="get_type" @guan='guan_types'></celab>
      <component :is="zujinas"></component>
    </div>
  </div>
</template>
<style scoped src='../style/home.css'></style>
<script>
import width from '../javascript/width.js'
import celab from "../views/left_box.vue";
import titles from "../views/title.vue";
import no_view from "../views/no_view.vue";
import richang from "../views/richang.vue";
// 引入每个type对应的组件
import zhongji from "../views/type_view_s/zhongji.vue";
import diba from "../views/type_view_s/diba.vue";
import diqi from "../views/type_view_s/dijqi.vue";
import diliu from "../views/type_view_s/diliu.vue";
import diwu from "../views/type_view_s/diwu.vue";
import disi from "../views/type_view_s/dishi.vue";
import dijiu from "../views/type_view_s/dijiu.vue";
import diji from "../views/type_view_s/diji.vue";
import juese_root from '../components/user.root.vue'
import juser_view from '../components/user_view.vue'
export default {
  data() {
    return {
      type_quan: "",
      zujinas: "richang",
      type_view: [zhongji, diji, diwu, diliu, diqi, diba, dijiu, disi,richang],
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
  mounted(){
    width('.contents')
  },
  methods: {
    get_type(data) {
      console.log(data)
      let type_shu = parseInt(window.localStorage.type);  
      if (type_shu < data[0].types) {
        this.zujinas = "no_view";
      } else {
        this.zujinas=this.type_view[data[1]]
      }
    },
    // 管理员的type
    guan_types(data){
      this.zujinas=data
    }
  },
  components: {
    celab,
    titles,
    no_view,
    richang,
    // type多组件注册
    zhongji,
    diba,
    diqi,
    diliu,
    diwu,
    disi,
    dijiu,
    diji,
    juese_root,
    juser_view,
  },
};
</script>