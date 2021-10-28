import Axios from 'axios'
import { ElMessage } from 'element-plus'

const baseURL = 'https://api.github.com'

const axios = Axios.create({
  baseURL,
  timeout: 20000 // 请求超时20s
})

// 请求拦截器
axios.interceptors.request.use(
  (config) => {
    /**
     * 根据项目实际情况来对config 做处理
     * 这里对 config 不做任何处理， 直接返回
     */
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
axios.interceptors.response.use(
  (response) => {
    /**
     * 根据项目实际情况来对 response 和 error 做处理
     * 这里不做任何处理
     */
    return response
  },
  (error) => {
    if (error.response && error.response.data) {
      const code = error.response.status
      const msg = error.response.data.message
      ElMessage.error(`Code: ${code}, Message: ${msg}`)
      console.log(error(`[Axios Error]`, error.response))
    } else {
      ElMessage.error(`${error}`)
    }
    return Promise.reject(error)
  }
)
