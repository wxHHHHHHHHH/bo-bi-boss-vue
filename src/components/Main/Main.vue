<template>
  <div>
    <div class="header">
      <logoDiv></logoDiv>
      <div class="app_bar">
        <ul>
          <li>
            <a href=""> 成员组成 </a>
          </li>
          <li>
            <a href=""> 活动公告 </a>
          </li>
          <li>
            <a href=""> 联系客服 </a>
          </li>
          <li>
            <div class="head_portrait" @click="drawer = true">
              <span class="nickName">{{ nickName }}</span>
              <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            </div>
            <el-drawer :title="nickName" :visible.sync="drawer" :size =420 custom-class="my-drawer">
              <div class="user_info">
                <span>姓名：</span>
                <span>test波比</span>
                <span>性别：</span>
                <span>男</span>
                <span>籍贯：</span>
                <span>山东</span>
                <span>手机号：</span>
                <span>46921400</span>
                <div class="update_password">
                  <span>更改密码</span>
                </div>
              </div>
            </el-drawer>
          </li>
        </ul>
      </div>
    </div>
    <el-carousel :interval="5000" arrow="never">
      <el-carousel-item el-carousel-item v-for="(item, index) in imagList" :key="index">
        <video class="video_carousel" playsinline :src=item @mouseenter="showControls" @mouseleave="hideControls"
          :controls="showingControls" width="1226" height="300" poster="./img/index/微信图片_20240715104013.jpg"></video>
      </el-carousel-item>
    </el-carousel>
    <div class="foot">
      <ul>
        <li>
          <a @click="goStaff">
            <span>集团成员管理</span>
            <img src="../../assets/img/main/foot/1.png" alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <span>安全中心</span>
            <img src="../../assets/img/main/foot/6.png" alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <span>资料中心</span>
            <img src="../../assets/img/main/foot/2.png" alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <span>波比圈</span>
            <img src="../../assets/img/main/foot/4.png" alt="" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import logoDiv from '../Logo.vue'; 
export default {
  components:{
    logoDiv
  },
  name: "Main",
  data(){
    return{
        imagList: [
        'https://vip.123pan.cn/1833477021/gao_da/%E6%B3%A2%E7%95%9C%E4%B9%8B%E7%8C%AB%E5%92%AA%E9%AA%91%E5%A4%B4%E6%8B%89%E5%A4%A7fen.mp4',
        'https://vip.123pan.cn/1833477021/gao_da/%E6%B5%8B%E8%AF%95%E8%A7%86%E9%A2%91.mp4'
      ],
      showingControls: false,
      "nickName":this.$cookies.get("user")['nickName'],
      drawer: false,
    }
  },
  methods: {
    showControls() {
      this.showingControls = true;
    },
    hideControls() {
      this.showingControls = false;
    },
    goStaff(){
      this.$router.push('/Staff')
    }
  }

};
</script>
<style scoped>
@import url(./css/Main.css);

</style>