/**
 * @author: Wang.X.Y/comrade.wang.cn@gmail.com
 * @Date: 2019/11/1
 * @Time: 14:07
 * @Description:  aixos 拦截器请求
 */
import axios from 'axios'
// import qs from 'qs'
import store from '@/store'

const urlSearchParams = function(data) {
  const params = new URLSearchParams()
  // var params = new FormData()
  for (const i in data) {
    params.append(i, data[i])
  }
  return params
}
const formDataParams = function(data) {
  const params = new FormData()
  for (const i in data) {
    params.append(i, data[i])
  }
  return params
}
/** **** 创建axios实例 ******/
const service = axios.create({
  baseURL: process.env.VUE_APP_URL, // api的base_url
  timeout: 5000 // 请求超时时间
})

/** **** request拦截器==>对请求参数做处理 ******/
service.interceptors.request.use(
  config => {
    config.headers['Authorization'] = store.state.openid
    // config.headers['Authorization'] = ''
    // 根据类型判断 去将数据转化成不同格式 并设置Content-Type
    const reqMethod = config.method.toLowerCase()
    switch (reqMethod) {
      case 'post':
        config.headers['Content-Type'] = 'application/json;charset=UTF-8'
        // config.data = JSON.stringify(config.data)
        // config.data = config.data
        break
      case 'postparam':
        // 对应后台 @requestParam 注解
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
        config.data = urlSearchParams(config.data)
        config.method = 'post'
        break
      case 'put':
        config.headers['Content-Type'] = 'application/json;charset=UTF-8'
        config.data = JSON.stringify(config.data)
        break
      case 'putparam':
        // 对应后台 @requestParam 注解
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
        config.data = urlSearchParams(config.data)
        config.method = 'put'
        break
      case 'upload':
        config.headers['Content-Type'] = 'multipart/form-data'
        config.data = formDataParams(config.data)
        config.method = 'post'
        break
      case 'delete':
        config.headers['Content-Type'] = 'application/json;charset=UTF-8'
        config.params = { ...config.params }
        config.method = 'delete'
        break
      default:
        config.params = { ...config.params }
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
        break
    }
    // 如果data中传入 interfaceType === 'order' 代表需要请求 social-hill-pay 后台 更换 baseURL
    if (
      config.data &&
      config.data.interfaceType &&
      config.data.interfaceType === 'order'
    ) {
      config.baseURL = process.env.VUE_APP_URL
      delete config.data.interfaceType
    }
    // config.method === 'post'
    //   ? config.data = qs.stringify({...config.data})
    //   : config.params = {...config.params}
    // config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    return config
  },
  error => {
    // 请求错误处理
    Promise.reject(error)
  }
)

/** **** respone拦截器==>对响应做处理 ******/
service.interceptors.response.use(
  response => {
    // 成功请求到数据
    // 这里根据后端提供的数据进行对应的处理
    if (response.data.code === 200) {
      return response.data.data
    } else if (!response.data.code) {
      return response.data
    } else {
    }
  },
  error => {
    // 响应错误处理
    // console.log('error------------------------')
    // console.log(JSON.parse(JSON.stringify(error)))
    // let text = JSON.parse(JSON.stringify(error)).response.status === 404
    //   ? '404'
    //   : '网络异常，请重试'
    // app.$vux.toast.show({
    //   type: 'warn',
    // text: '网络异常，请重试'
    // })

    return Promise.reject(error)
  }
)

export default service
