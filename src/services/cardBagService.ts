import axios from 'axios';
import { baseURL } from '@/constants/urls';

export const instance = axios.create({
  withCredentials: true,
  baseURL,
});

export const getProductById = async (data: number[]) => {
  let responses = await Promise.allSettled(
    data.map((id: any) => instance.get(`products/${id}?populate=*`))
  ).catch((err) => err);
  let res = responses.map((item: { value: { data: { data: object } } }) => item.value?.data?.data);
  return res;
};
