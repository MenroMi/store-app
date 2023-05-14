import api from './apiClient';

export const getProducts = async () => {
  return api.get('/products').then((res) => res.data);
};
