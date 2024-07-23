import axios from 'axios'
import Vue from 'vue';
import store from '../store'


//创建一个axios的对象
const instance = axios.create({
  baseURL: "http://60.205.8.116:9999/boss-bo-bi", //baseURL会在发送请求时拼接在url参数前面
  timeout: 5000
})

//请求拦截
//所有的网络请求都会先走这个方法，我们可以在他里面为请求添加一些自定义的内容
instance.interceptors.request.use(
  function(config) {
    const user = Vue.$cookies.get('user')
    if (user){
     config.headers['token'] = user.token; // 将 token 添加到请求头中)
     console.log(config)
    }
    return config;
  },
  function(err) {
    return Promise.reject(err);
  }
);

//响应拦截
//所有的网络请求返回数据之后都会先执行此方法
//此处可以根据服务器的返回状态码做相应的数据
instance.interceptors.response.use(
  function(response) {
    if (response.status===200){
      let data =response.data
   
      if (data.code === 200){
          return data.data
      }else{
        return Promise.reject(response.data)
      }
    }else{
      
    }
 
    return response;
  },
  function(err) {
    return Promise.reject(err);
  }
);

const goLoginUrl = '/login/goLogin'
const findUserUrl = '/user/findUser'
//登录接口
export function goLogin(data) {

  return instance.post(goLoginUrl, data)
}

//成员接口
export function findUser(data) {

  return instance.post(findUserUrl, data)
}