import axios from 'axios';

export const headers = {
  'content-type': 'application/json;charset=UTF-8',
};

export const axiosApiInstance = axios.create();

// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
  (config) => {
    console.log(config, '악시오스 컨피그');
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
