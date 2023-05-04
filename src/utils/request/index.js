import axios from 'axios'
import nProgress from 'nprogress';
import 'nprogress/nprogress.css'

const request = axios.create({
    baseURL: '/api',
    timeout: 3000
})

request.interceptors.request.use((config) => {
    config.headers.userTempId = localStorage.getItem('uuid')
    nProgress.start()
    return config;
})

request.interceptors.response.use((res) => {
    nProgress.done()
    return res.data
}, (err) => {
    return err
})

const mockReq = axios.create({
    baseURL: '/mock',
    timeout: 3000
})

mockReq.interceptors.request.use((config) => {
    nProgress.start()
    return config;
})

mockReq.interceptors.response.use((res) => {
    nProgress.done()
    return res.data
}, (err) => {
    return err
})

export {
    mockReq, request
}


