import axios from 'axios';
import { baseURL } from '@/constants/urls';
import { AttrFromData } from '@/types/cardListTypes';

const instance = axios.create({
  withCredentials: true,
  baseURL,
});

export const getProductById = async (id: number) => {
  const data = await instance.get(`/products/${id}?populate=*&`);
  return data?.data?.data;
};

// export const getProductPriceById = async (id: number) => {
//   const response: number = await instance
//     .get(`/products/${id}`)
//     .then((res) => res?.data?.data?.attributes?.price);
//   console.log(response);
//   return response;
// };

// export const getProductPrices = async (arrayOfId: number[]) => {
//   let ArrayOfPrices: number[] = [];
//   arrayOfId.map(async (id: number) => {
//     const data = await instance
//       .get(`/products/${id}`)
//       .then((res) => res?.data?.data?.attributes?.price);
//     ArrayOfPrices.push(data);
//   });
//   return ArrayOfPrices;
// };

export const getProducts = async (arrayOfId: number[]) => {
  let ArrayOfItems: AttrFromData[] = [];
  arrayOfId.map(async (id: number) => {
    const data = await instance.get(`/products/${id}?populate=*&`).then((res) => res?.data?.data);
    ArrayOfItems.push(data);
  });
  console.log(ArrayOfItems);
  return ArrayOfItems;
};
