import Axios, { AxiosInstance } from 'axios';

export const client: AxiosInstance = Axios.create({
  baseURL: 'https://info-malang-batu.firebaseapp.com/',
  timeout: 60000,
});

client.interceptors.request.use((request) => {
  if (__DEV__) {
    console.log(`Request # url `+ request.baseURL + request.url);
  }
  return request;
});

client.interceptors.response.use((response) => {
  if (__DEV__) {
    console.log(`Response # `, JSON.stringify(response.data, null, 2));
  }
  return response;
});