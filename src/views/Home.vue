<template>
  <div class="home_box">
    <!-- hello这里是首页组件 当前用户为{{ type_quan }} -->
    <titles></titles>
    <celab></celab>
  </div>
</template>


<script>
import celab from '../views/left_box.vue'
import titles from '../views/title.vue'
export default {
  data() {
    return {
      type_quan: "",
    };
  },
  created() {
    if (this.$store.name != undefined) {
      this.type_quan = this.$store.name;
    } else {
      this.type_quan=window.localStorage.name;
    }
    if(window.localStorage.name==undefined){
      this.$router.push({
        path:'/'
      })
    }
  },
  components:{
    celab,
    titles
  }
};
</script>