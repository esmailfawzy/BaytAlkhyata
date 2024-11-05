import axios from 'axios';
import {BASE_URL} from '../constants/AppConfig';

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

server.interceptors.response.use(
  async response => {
    // console.log('response from interceptors', response);
    return Promise.resolve(response);
  },
  async error => {
    // console.log('error from response', error);
    // const msg = 'there is an error in axiosInterceptor: ';
    if (
      (error.response.status === 400 || error.response.status === 403,
      error.response.status === 401)
    ) {
      return Promise.reject('Authentication Fail');
    }

    // if (error.response.status === 404) {
    //   console.log(msg + 'Not Found');
    // }

    // if (error.response.status === 500) {
    //   console.log(msg + 'Internal Server Error');
    // }

    // if (error.response.status === 508) {
    //   console.log(msg + 'Time Out');
    // }

    return Promise.reject(error);
  },
);
