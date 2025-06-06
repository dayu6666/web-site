import axios from 'axios';

// 创建 axios 实例
const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://api.yourdomain.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    // 例如获取并添加 token
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    return response.data;
  },
  (error) => {
    // 对响应错误做点什么
    if (error.response) {
      // 请求已发出，服务器用状态码响应
      console.error('Response error:', error.response.status, error.response.data);
      
      // 处理 401 未授权错误
      if (error.response.status === 401) {
        // 清除本地存储的 token
        localStorage.removeItem('token');
        // 可以在这里添加重定向到登录页面的逻辑
      }
    } else if (error.request) {
      // 请求已发出，但没有收到响应
      console.error('Request error:', error.request);
    } else {
      // 设置请求时发生了一些事情，触发了错误
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default instance; 