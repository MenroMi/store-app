import axios from 'axios';
import { baseURL } from '@/constants';
import { AttrFromData } from '@/types/cardListTypes';

const instance = axios.create({
  withCredentials: true,
  baseURL,
});

export const getProductById = async (id: number) => {
  const data = await instance.get(`/products/${id}?populate=*&`);
  return data?.data?.data?.attributes;
};

export const getProductPriceById = async (id: number) => {
  const response: number = await instance
    .get(`/products/${id}`)
    .then((res) => res?.data?.data?.attributes?.price);
  return response;
};
