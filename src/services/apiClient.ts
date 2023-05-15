import axios from 'axios';
import { baseURL } from '@/constants';

const instance = axios.create({
  withCredentials: true,
  baseURL,
});

export const getDataFromStrapi = async (url: string, params: string = 'populate=*') => {
  return await instance.get(`${url}?${params}`);
};
