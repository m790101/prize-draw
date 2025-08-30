import axios from "axios";

// Create axios instance with default config
const axiosInstance = axios.create({
  baseURL: __API_BASE_URL__ || "http://localhost:8080/api/v1",
  timeout: 100000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor
// axiosInstance.interceptors.request.use(
//   (config) => {
//     // Add auth token if available
//     const token = localStorage.getItem('authToken');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// Add response interceptor
// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     // Handle global errors here
//     if (error.response?.status === 401) {
//       // Redirect to login or refresh token
//       localStorage.removeItem('authToken');
//       window.location.href = '/login';
//     }
//     return Promise.reject(error);
//   }
// );

// Create axios client using the configured instance
const axiosClient = {
  async post(url, postData = {}) {
    try {
      const res = await axiosInstance.post(url, postData);
      return res;
    } catch (error) {
      console.log("error post",error)
      return error.response;
    }
  },
  async get(url) {
    const res = await axiosInstance.get(url);
    const { data } = res;
    return data;
  },
  async put(url, putData = {}) {
    const res = await axiosInstance.put(url, putData);
    console.log(res);
    return res;
  },
  async delete(url) {
    const res = await axiosInstance.delete(url);
    console.log(res);
    return res;
  },

  async patch(url, patchData = {}) {
    const res = await axiosInstance.patch(url, patchData);
    console.log(res);
    return res;
  },
};

export default axiosClient;
