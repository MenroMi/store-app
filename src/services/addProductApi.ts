import { getDataFromServer } from './apiClient';

export const getBrands = async () => {
  const brands = await getDataFromServer('/brands', 'fields=name').then((res) => res?.data?.data);

  return brands;
};

export const getGenders = async () => {
  const genders = await getDataFromServer('/genders', 'fields=name').then((res) => res?.data?.data);

  return genders;
};
