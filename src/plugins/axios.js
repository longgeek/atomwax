import axios from 'axios'
import store from '@/state/store'

// Axios Config
axios.defaults.timeout = 10900000;
axios.defaults.baseURL = process.env.VUE_APP_BASEURL;

// http request 拦截器
axios.interceptors.request.use(
    config => {
        if (store.state.token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers.Authorization = `token ${store.state.token}`;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    });

// http response 拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 返回 401 并跳转到 SSO 页面
                    window.location.href = process.env.VUE_APP_LOGIN + '?next_url=' + window.location.href;
            }
        }
        return Promise.reject(error.response.data)   // 返回接口返回的错误信息
    });

export default axios
