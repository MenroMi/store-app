import { baseURL } from '@/constants/urls';
import { ISettings } from '@/types';
import axios from 'axios';

interface IUpdateData {
  token: string | null;
  id: number;
  dataToUpdate: ISettings;
}

export const getUser = async (token: string | null) => {
  const response = await axios.get(`${baseURL}users/me?populate=*`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const updateUser = async ({ token, id, dataToUpdate }: IUpdateData) => {
  const response = await axios.put(`${baseURL}users/${id}?populate=*`, dataToUpdate, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const deleteAvatar = async ({ token, id }: Omit<IUpdateData, 'dataToUpdate'>) => {
  const response = await axios.delete(`${baseURL}upload/files/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
