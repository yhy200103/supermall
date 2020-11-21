import axios from 'axios'
//           requset导出的方法名
export function request(config){
  const instance=axios.create({
    baseURL:'http://152.136.185.210:8000/api/w6',
    timeout:3000
  })
  //拦截器在这里拦截
  instance.interceptors.response.use(res=>{ //res为config,也就是传入的url
    return res.data//拿出res.data,过滤掉其他没用的东西
  },err=>{
    console.log(err)
  })
  return instance(config) //调用instance的then
}




// export function request(config){
//   const instance=axios.create({
//     baseURL:'http://123.207.32.32:8000',
//     timeout:3000
//   })
//   //拦截器在这里拦截
//   instance.interceptors.request.use(config=>{ //res为config,也就是传入的url
//     return config//拿出res.data,过滤掉其他没用的东西
//   },err=>{
//     // console.log(err)
//   })
//   instance.interceptors.response.use(res=>{
//     return res.data
//   },err=>{
//     console.log(err)
//   })
//   return instance(config) //调用instance的then
// }