import axios from 'axios'


//创建一个axios的对象
const instance = axios.create({
  baseURL: "http://localhost:9999/boss-bo-bi", //baseURL会在发送请求时拼接在url参数前面
  timeout: 5000
})

//请求拦截
//所有的网络请求都会先走这个方法，我们可以在他里面为请求添加一些自定义的内容
instance.interceptors.request.use(
  function(config) {

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
        alert(data.message)
      }
    }else{
      ro
    }
 
    return response;
  },
  function(err) {
    return Promise.reject(err);
  }
);

const goLoginUrl = '/login/goLogin'

//登录接口
export function goLogin(data) {
  console.log(data)
  return instance.post(goLoginUrl, data)
}
