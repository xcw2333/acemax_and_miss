<template>
  <div class="box">
    <!-- 登陆盒子开始 -->
    <div class="user_deng_box">
      <p class="title_p">
        <span>登陆</span>
        <em>or</em>
        <span>注册</span>
      </p>
      <div class="user_zh">
        <p>账号:</p>
        <input
          type="text"
          name=""
          id=""
          placeholder="输入账号"
          class="user_name"
          v-model="zh"
        />
      </div>
      <div class="user_parseword">
        <p>密码:</p>
        <el-input
          placeholder="请输入密码"
          v-model="mi"
          show-password
          class="parseword"
        ></el-input>
      </div>
      <div class="user_btn">
        <el-button class="btns" @click="deng">登陆</el-button>
        <el-button class="btns" @click="zhuce">注册</el-button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "u_lodin",
  data() {
    return {
      mi: "",
      zh: "",
    };
  },
  mounted() {
    let box = document.getElementsByClassName("box");
    box[0].style.width = document.documentElement.clientWidth + "px";
  },
  created() {
    // if (window.localStorage.name != ""&&window.localStorage.length!=0){
    //   this.$router.push({
    //     path: "/home/:id",
    //   });
    // }
  },
  methods: {
    deng() {
      let zh = document.querySelector(".user_name");
      let mi = document.querySelector(".parseword");
      if (this.zh == "" || this.mi == "") {
        this.$message("不可以输入空值");
      } else {
        this.$http
          .post(
            "http://localhost:8000/lodin/lodins",
            { zh: this.zh, mi: this.mi },
            { emulateJSON: true }
          )
          .then((data) => {
            if (data.body.code == "登陆成功") {
              this.$message(data.body.code);
              this.$store.zh = data.body.data[0].zh;
              this.$store.mi = data.body.data[0].mi;
              this.$store.type = data.body.data[0].type;
              this.$store.name = data.body.data[0].name;
              // 本地存储
              window.localStorage.zh = data.body.data[0].zh;
              window.localStorage.mi = data.body.data[0].mi;
              window.localStorage.type = data.body.data[0].type;
              window.localStorage.name = data.body.data[0].name;

              this.$router.push({
                path: `/home/${this.$store.name}`,
              });
            } else {
              this.$message(data.body.code);
            }
          });
      }
    },
    zhuce() {
      if (this.zh == "" || this.mi == "") {
        this.$message("不可以输入空值");
      } else {
        this.$http
          .post(
            "http://localhost:8000/lodin/zhu",
            { zh: this.zh, mi: this.mi },
            { emulateJSON: true }
          )
          .then((data) => {
            if (data.body.code != "" && data.body.code != undefined) {
              this.$message(data.body.code);
            }else{
              this.$message(data.body)
            }
          });
      }
    },
  },
};
</script>

<style src='../style/user_lodin.css' scoped></style>