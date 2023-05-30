import axios from 'axios';
import { baseURL } from '@/constants/urls';

const instance = axios.create({
  withCredentials: true,
  baseURL,
});

export const getDataFromServer = async (url: string, params: string = '?populate=*') => {
  return await instance.get(`${url}${params}`);
};
