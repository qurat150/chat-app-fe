import defaultAxios from 'axios';
import { getLocalAccessToken } from 'utlis';

const host = 'http://localhost:5000/api';

const instance = defaultAxios.create({
  baseURL: host,
});

instance.interceptors.request.use(
  (config) => {
    const token = getLocalAccessToken();
    if (token) config.headers['Authorization'] = token;
    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (err) => {
    console.log('Api failed with ', err);
    return Promise.reject(err);
  }
);

export { instance as axios };
