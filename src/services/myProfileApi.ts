import axios from 'axios';

import { baseURL } from '@/constants/urls';

export const getUserProducts = async (token: string) =>
  await axios.get(`${baseURL}users/me?populate[products][populate][0]=images,categories`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const deleteProduct = async (token: string, id: number) =>
  await axios.delete(`${baseURL}products/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
