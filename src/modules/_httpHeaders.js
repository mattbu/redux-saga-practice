import axios from 'axios';

export const headers = {
  'content-type': 'application/json;charset=UTF-8',
};

export const axiosApiInstance = axios.create();

// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
  (config) => {
    // if (!config.headers.Authorization) {
    //   config.headers.Authorization = sessionStorage.getItem('TOKEN');
    // }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
