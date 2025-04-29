import axios from 'axios';

// 创建axios实例
const request = axios.create({
  timeout: 10000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json'
  }
});

// 请求拦截器
request.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    // 例如：添加token
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 响应拦截器
request.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    return response.data;
  },
  error => {
    // 对响应错误做点什么
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 未授权处理
          break;
        case 403:
          // 禁止访问处理
          break;
        case 404:
          // 资源不存在处理
          break;
        case 500:
          // 服务器错误处理
          break;
        default:
          break;
      }
    }
    return Promise.reject(error);
  }
);

// 封装 get 方法
request.get = function (url, params = {}, config = {}) {
  return request({
    method: 'get',
    url,
    params,
    ...config
  });
};

// 封装 post 方法
request.post = function (url, data = {}, config = {}) {
  return request({
    method: 'post',
    url,
    data,
    ...config
  });
};

// 封装 getApi 方法，专用于 get 请求的 api 逻辑
request.getApi = async function ({ url, params = {}, config = {}, showLoading = false, showError = true, loadingText = '加载中...' }) {
  return await request.api({ method: 'get', url, params, config, showLoading, showError, loadingText });
};
// 封装 postApi 方法，专用于 post 请求的 api 逻辑
request.postApi = async function ({ url, data = {}, config = {}, showLoading = false, showError = true, loadingText = '加载中...' }) {
  return await request.api({ method: 'post', url, data, config, showLoading, showError, loadingText });
};

// 封装 api 方法，支持统一参数合并、loading 和错误提示
request.api = async function ({ method = 'get', url, params = {}, data = {}, config = {}, showLoading = false, showError = true, loadingText = '加载中...' }) {
  let loadingInstance = null;
  if (showLoading && window && window.document) {
    // 简单 loading 处理（可替换为更专业的 UI 组件）
    loadingInstance = document.createElement('div');
    loadingInstance.innerText = loadingText;
    loadingInstance.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:rgba(0,0,0,0.6);color:#fff;padding:12px 24px;border-radius:6px;z-index:9999;';
    document.body.appendChild(loadingInstance);
  }
  try {
    const res = await request({ method, url, params, data, ...config });
    if (loadingInstance) document.body.removeChild(loadingInstance);
    return res;
  } catch (error) {
    if (loadingInstance) document.body.removeChild(loadingInstance);
    if (showError && window && window.alert) {
      let msg = error?.response?.data?.message || error?.message || '请求失败';
      window.alert(msg);
    }
    throw error;
  }
};

export default request;