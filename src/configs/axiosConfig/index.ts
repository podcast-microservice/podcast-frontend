import axios from 'axios';
import { getAccessToken } from '../tokenConfig';

const axiosConfig = axios.create({
  baseURL: 'https://6522b2f6f43b17938414ca83.mockapi.io/api/v1/',
  headers: {
    'content-type': 'application/json'
  }
});

axiosConfig.interceptors.request.use(async (config) => {
  const accessToken = getAccessToken();
  if (accessToken) {
    console.log(accessToken);
    config.headers!.token = `Bearer ${accessToken as string}`;
  }
  return config;
});

axiosConfig.interceptors.response.use(
  async (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    if (error.response) {
      throw error.response.data;
    }
    throw error;
  }
);
export default axiosConfig;
