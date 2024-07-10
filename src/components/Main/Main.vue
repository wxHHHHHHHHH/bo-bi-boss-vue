<template>
  <div>
    <div class="header">
      <div class="logo">
        <a href="">中国波比集团</a>
      </div>
      <div class="app_bar">
        <ul>
          <li>
            <a href=""> 集团简介 </a>
          </li>
          <li>
            <a href=""> 成员组成 </a>
          </li>
          <li>
            <a href=""> 活动公告 </a>
          </li>
          <li>
            <a href=""> 联系客服 </a>
          </li>
        </ul>
      </div>
    </div>
    <el-carousel :interval="5000" arrow="never">
        <el-carousel-item   el-carousel-item v-for="item in imagList" :key="item">
            <img :src="item">
        </el-carousel-item>
    </el-carousel>
    <div class="foot">
      <ul>
        <li>
          <a href="#">
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
export default {
  name: "Main",
  data(){
    return{
        imagList: [
        'https://img2.baidu.com/it/u=3474635902,3007408608&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800',
        'https://img2.baidu.com/it/u=3474635902,3007408608&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800',
        'https://img2.baidu.com/it/u=3474635902,3007408608&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800'
      ],
    }
  }
};
</script>
<style scoped>
@import url(../../assets/font/font.css);
@import url(../../assets/res_set.css);
body {
  background-color: #000000;
  min-height: 98vh;
  perspective: 1500px;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background: linear-gradient(#141e30, #243b55);
}

body > div > div > div {
  /* 设置宽度 */
  width: 1226px;
  /* 设置高度 */
  height: 100px;
  /* 使它居中 上下不管 居中 */
  margin: 20px auto;
}

body > div > div > div.header > .logo {
  float: left;
  width: 400px;
  height: 100px;
  line-height: 100px;
  font-size: 24px;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;

  border-radius: 50px;
  background-image: linear-gradient(
    to right,
    #03a9f4,
    #f441a5,
    #ffeb3d,
    #09a8f4
  );
  background-size: 400%;
  font-size: 50px;
  animation: sun 16s infinite;
}

body > div > div > div.header > .logo > a {
  color: #fff;
}

@keyframes sun {
  100% {
    background-position: -400% 0;
  }
}

body > div > div > div.header > .app_bar > ul > li {
  float: left;
}

body > div > div > div.header > .app_bar > ul > li > a {
  display: inline-block;
  width: 200px;
  height: 100px;
  line-height: 100px;
  font-size: 24px;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  border-radius: 50px;
  color: #fff;
}

body > div > div > div.header > .app_bar > ul > li > a:hover {
  background-color: #00ffff;
  color: #000000;
}

.el-carousel {
  width: 1226px;
  height: 300px;
}

body
  > div
  > div
  > div.swiper.swiper-initialized.swiper-horizontal.swiper-backface-hidden
  > div.swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets.swiper-pagination-horizontal
  > span {
  display: inline-block;
  height: 12px;
  width: 12px;
  padding: 0 5px;

  margin: 0 10px;
  border: 2px solid #fff;
  border-color: hsla(180, 50%, 66%, 0.3);
  border-radius: 10px;
  background: rgba(255, 0, 0, 0.4);
}

body > div > div > .swiper > .swiper-button-prev {
  color: #000;
}
body > div > div > .swiper > .swiper-button-next {
  color: #000;
}

/* 脚步图片调整 */
body > div > div > .foot > ul > li {
  /* display: inline-block; */
  float: left;
  width: 306.5px;
  height: 300px;
}
body > div > div > .foot > ul > li > a {
  display: inline-block;
  width: 306.5px;
  height: 300px;
  position: absolute;
}

body > div > div > .foot > ul > li > a:hover span {
  background-image: linear-gradient(
    to right,
    #03a9f4,
    #f441a5,
    #ffeb3d,
    #09a8f4
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent; /* 设置文本颜色为透明，使得背景渐变可以显示出来 */
  font-size: 45px;
}

body > div > div > .foot > ul > li > a > img {
  /* display: inline-block; */
  width: 306.5px;
  height: 300px;
}
body > div > div > .foot > ul > li > a > img {
  /* display: inline-block; */
  width: 306.5px;
  height: 300px;
}
body > div > div > div.foot > ul > li > a > span {
  display: inline-block;
  position: relative;
  font-size: 50px;
  height: 50px;
  width: 100%;
  color: #00ffff;
  text-align: center;
}
</style>