import axios from 'axios';
import { BASE_URL } from '../constants/AppConfig';

// Set config defaults when creating the instance
export const server = axios.create({
  baseURL: BASE_URL,
  timeout: 6000,
  headers: {
    Accept: 'application/json',
  },
});

// Alter defaults after instance has been created
// server.defaults.headers.common['Authorization'] = 'Bearer' + 'AUTH_TOKEN';

// API request interceptor
// server.interceptors.request.use(
//   async request => {

//     const token = AsyncStorage.getAllKeys('jwtTokne');
//     console.log(token);
//     if (token) {
//       request.headers.Authorization = `Bearer ${token}`;
//     }
//     return request;
//   },
//   async error => {
//     // Do something with request error here
//     // console.log('error', error);
//     return error;
//   },
// );

// server.interceptors.response.use(
//   async response => {
//     console.log('response from interceptors', response);
//     return Promise.resolve(response);
//   },
//   async error => {
//     console.log('error from response', error);
//     return Promise.reject(error);
//   },
// );
