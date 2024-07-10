<template>
  <div id="app" class="my-login-box">
    <h2 style="color: #03e9f4">中国波比集团</h2>
    <form @submit.prevent>
      <div class="user-box">
        <input type="text" v-model="loginParm.nickName">
        <label>呢称</label>
      </div>
      <div class="user-box">
        <input type="password" v-model="loginParm.password">
        <label>密码</label>
      </div>
      <a href="#" class="userlogin" @click="login" style="margin-top: 7px">
        <span></span> 登录
      </a>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'LoginUser',
    data: function() {
      return {
        loginParm: {
          nickName: null,
          password: null
        }
      }
    },
    methods: {
      login() {
        
        this.$http.goLogin(this.loginParm).then(res=>{
          this.$router.push('/main');
        })
        
      }
    }
  }
</script>

<style>
@import url(../../assets/font/font.css);
@import url(../../assets/res_set.css);
body {
	background-color: #000000;
	min-height: 98vh;
	perspective: 1500px;
	margin: 0;
	padding: 0;
	background: linear-gradient(#141e30, #243b55);
  font-family: 'ali';
}

div#bgDIV {
	width: 100vw;
	height: 98vh;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 0;
}

html {
	height: 100%;
}


.my-login-box {
	position: absolute;
	top: 50%;
	left: 50%;
	width: 400px;
	padding: 40px;
	transform: translate(-50%, -50%);
	background: rgba(0, 0, 0, .5);
	box-sizing: border-box;
	box-shadow: 0 15px 25px rgba(0, 0, 0, .6);
	border-radius: 10px;
}

.my-login-box h2 {
	margin: 0 0 30px;
	padding: 0;
	color: #fff;
	text-align: center;
}

.my-login-box .user-box {
	position: relative;
}

.my-login-box .user-box input {
	width: 100%;
	padding: 10px 0;
	font-size: 16px;
	color: #fff;
	margin-bottom: 30px;
	border: none;
	border-bottom: 1px solid #fff;
	outline: none;
	background: transparent;
}

.my-login-box .user-box label {
	position: absolute;
	top: 0;
	left: 0;
	padding: 10px 0;
	font-size: 16px;
	color: #fff;
	pointer-events: none;
	transition: .5s;
}

.my-login-box .user-box input:focus~label,
.my-login-box .user-box input:valid~label {
	top: -30px;
	left: 0;
	color: #03e9f4;
	font-size: 12px;
}

.my-login-box form a {
	position: relative;
	display: inline-block;
	padding: 10px 20px;
	color: #03e9f4;
	font-size: 16px;
	text-decoration: none;
	text-transform: uppercase;
	overflow: hidden;
	transition: .5s;
	margin: 100px;
	letter-spacing: 4px;

}

.my-login-box a:hover {
	background: #03e9f4;
	color: #fff;
	border-radius: 5px;
	box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4, 0 0 100px #03e9f4;
}

.my-login-box a span {
	position: absolute;
	display: block;
}

.my-login-box a span:nth-child(1) {
	top: 0;
	left: -100%;
	width: 100%;
	height: 2px;
	background: linear-gradient(90deg, transparent, #03e9f4);
	animation: btn-anim1 1s linear infinite;
}

@keyframes btn-anim1 {
	0% {
		left: -100%;
	}

	50%,
	100% {
		left: 100%;
	}
}

@keyframes btn-anim2 {
	0% {
		top: -100%;
	}

	50%,
	100% {
		top: 100%;
	}
}

@keyframes btn-anim3 {
	0% {
		right: -100%;
	}

	50%,
	100% {
		right: 100%;
	}
}

.my-login-box a span:nth-child(4) {
	bottom: -100%;
	left: 0;
	width: 2px;
	height: 100%;
	background: linear-gradient(360deg, transparent, #03e9f4);
	animation: btn-anim4 1s linear infinite;
	animation-delay: .75s
}

@keyframes btn-anim4 {
	0% {
		bottom: -100%;
	}

	50%,
	100% {
		bottom: 100%;
	}
}


</style>
