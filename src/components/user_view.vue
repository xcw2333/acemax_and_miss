<template>
  <div class="box">
    <div class="user_view_content">
      <div class="tishi_user" v-if="shows">
        <p>
          注意只根据当前已经注册的用户来展示权限用户为空的不会显示到此分类里面
        </p>
        <svg class="icon guan_title" aria-hidden="true" @click="shows = false">
          <use xlink:href="#icon-guanbi"></use>
        </svg>
      </div>
      <div class="user_list">
        <span
          v-for="(i, index) in new_datas"
          :key="index"
          @click="type_page(index)"
          :class="type_sum == index ? 'active' : ''"
          >{{ i }}</span
        >
      </div>
      <!-- 下面的主要内容部分开始 -->
      <div class="zhu_content">
        <div
          class="zhu_content_type"
          v-for="(i, index) in data_view"
          :key="index"
        >
          {{ i }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/ico_one/font_2784467_6gtq4eewk2x/iconfont.js";
import width from "../javascript/width";
export default {
  data() {
    return {
      data_type: ["全部"],
      new_datas: [],
      shows: true,
      type_sum: "",
      big_data: "",
      data_view: "",
    };
  },
  created() {
    this.$http.get("http://localhost:8000/userday").then((data) => {
      this.big_data = data;
      let datas = data.data.data;
      this.big_data = datas;
      this.data_view = datas;
      this.data_type.push(datas[0].name);
      this.data_type.forEach((item) => {
        datas.forEach((items) => {
          if (item.indexOf(items.name) == -1) {
            console.log(items.name);
            this.data_type.push(items.name);
          }
        });
      });
      this.new_datas = this.data_type.filter(
        (x, index, arr) => arr.indexOf(x) === index
      );
    });
  },
  mounted() {
    console.log(width);
  },
  methods: {
    type_page(index) {
      this.type_sum = index;
      this.data_view = [];
      console.log();
      // for(let i=0;i<this.big_data.length;i++){
      //   if(this.big_data[i].name==this.new_datas[index]){
      //     this.data_view.push(this.big_data[i])
      //   }
      // }
      if (this.new_datas[index] == "全部") {
        this.data_view = this.big_data;
      } else {
        for (let i = 0; i < this.big_data.length; i++) {
          if (this.big_data[i].name == this.new_datas[index]) {
            this.data_view.push(this.big_data[i]);
          }
        }
      }
    },
  },
};
</script>

<style scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.box {
  width: 100vw;
  height: 400px;
  /* background: yellow; */
}
.tishi_user {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #95a5a6;
  color: white;
  font-size: 16px;
  font-weight: 100;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.guan_title {
  margin-left: 10px;
  font-size: 21px;
  font-weight: 200;
}
.user_list {
  margin-top: 20px;
}
.user_list span {
  margin: 0 20px;
  background: #2980b9;
  padding: 0px 5px;
  border: solid 1px white;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  transition: 0.5s;
}
.user_list .active {
  background: #1abc9c;
  color: black;
}
.zhu_content {
  margin-top: 20px;
  height: 75.5vh;
  width: 100%;
  background: #ecf0f1;
  overflow-x: auto;
}
.zhu_content > div {
  width: 100%;
  height: 65px;
  margin-bottom: 8px;
  background: red;
  display: flex;
  align-items: center;
  padding-left: 20px;
  box-sizing: border-box;
}
</style>