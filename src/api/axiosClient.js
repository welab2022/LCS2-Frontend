import axios from "axios";

const API = localStorage.getItem("API");
console.log({ API });
const axiosClient = axios.create({
  withCredentials: true,

  headers: {
    "Content-type": "application/json",
    "X-API-KeY": "sWOmNsF8Ht9lE9wMU9cW7w==n",
  },
});
// // Add a request interceptor
// axiosClient.interceptors.request.use(function (config) {
//     // Do something before request is sent

//     return config;
//   }, function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   });

// // Add a response interceptor
// axiosClient.interceptors.response.use(function (response) {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     return response.data;
//   }, function (error) {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     return Promise.reject(error);
//   });

export default axiosClient;
