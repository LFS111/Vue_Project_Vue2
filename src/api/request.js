//对axios二次封装
import axios from 'axios'
import nprogress from 'nprogress'
import "nprogress/nprogress.css"
import store from '@/store'

const requests = axios.create({

    baseURL: '/api',
    timeout: 5000

})

//请求拦截器
requests.interceptors.request.use((config) => {
    if (store.state.detail.uuid) {
        config.headers.userTempId = store.state.detail.uuid
    }
    if (store.state.user.token) {
        config.headers.token = store.state.user.token
    }



    nprogress.start()
    return config
})
//响应拦截器
requests.interceptors.response.use((res) => {
    nprogress.done()
    return res.data
}, (error) => {
    return Promise.reject(new Error('fail', error.message));
})
export default requests;