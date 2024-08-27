import axios from 'axios';

const adminApiClient = axios.create({
  baseURL: 'http://localhost:3001/admin/api/v1',
});

// リクエストインターセプターでトークンをヘッダーに追加
adminApiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default adminApiClient;
