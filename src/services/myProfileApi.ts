import axios from 'axios';

import { baseURL } from '@/constants';

export const getUserProducts = async (token: string) =>
  await axios.get(`${baseURL}users/me?populate[products][populate][0]=images,categories`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
