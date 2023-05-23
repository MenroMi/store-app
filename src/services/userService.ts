import { baseURL } from '@/constants';
import { ISettings } from '@/types';
import axios from 'axios';

interface IUpdateData {
  token: string | null;
  id: number;
  updateFormData: ISettings;
}

export const getUser = async (token: string | null) => {
  const response = await axios.get(`${baseURL}users/me?populate=*`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(response.data);
  return response.data;
};

export const updateUser = async ({ token, id, updateFormData }: IUpdateData) => {
  const response = await axios.put(`${baseURL}users/${id}?populate=*`, updateFormData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(response.data);
  return response.data;
};
