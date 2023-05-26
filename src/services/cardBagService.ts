import axios from 'axios';
import { baseURL } from '@/constants';

const instance = axios.create({
  withCredentials: true,
  baseURL,
});

export const getProductById = async (id: number) => {
  return await instance.get(`/products/${id}`).then((response) => response?.data?.data);
};

export const getProductPriceById = async (id: number) => {
  return await instance
    .get(`/products/${id}`)
    .then((response) => response?.data?.data?.attributes?.price)
};