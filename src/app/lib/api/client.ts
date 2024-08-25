import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3001/api/v1',
});

// リクエストインターセプターでトークンをヘッダーに追加
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default apiClient;
