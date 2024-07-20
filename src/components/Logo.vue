<template>
        <div class="logo">
            <a @click="goCompanyProfile">中国波比集团</a>
        </div>

  </template>
  
  <script>
  export default {
    name: 'logo_div',
    // 可以在这里定义组件的其他选项
    methods:{
        
		goCompanyProfile(){
            const currentRoute = this.$route.path;
            if ('/CompanyProfile' != currentRoute){
                this.$router.push('/CompanyProfile')
            }	
    	}
    }
  }
  </script>
  
  <style scoped>
  .logo {
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

  @keyframes sun {
  100% {
    background-position: -400% 0;
  }
}
  </style>
  