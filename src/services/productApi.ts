// basic
import axios from 'axios';
// services
import { getDataFromServer } from './apiClient';
// constants
import { baseURL } from '@/constants/urls';
// interfaces
import { IProductData } from '@/types/addProductTypes';

export const getDataWithField = async (endpoint: string, fieldName: string = 'name') =>
  await getDataFromServer(`${endpoint}`, `fields=${fieldName}`).then((res) => res?.data?.data);

export const getUserID = async (token: string) =>
  await axios.get(`${baseURL}users/me?fields=id`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const uploadImage = (image: File) => {
  const formData = new FormData();
  formData.append('files', image);

  return axios.post(`${baseURL}upload`, formData);
};

export const postProduct = (data: IProductData, token: string) =>
  axios.post(`${baseURL}products`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const getProductById = async (id: number) => {
  const { data } = await axios.get(`${baseURL}products/${id}?populate=images,color,gender,size`);
  console.log(id);
  return data;
}

export const getProducts = async () => {
  const { data } = await axios.get(`${baseURL}products?pagination[limit]=-1`);
  return data.data;
}
