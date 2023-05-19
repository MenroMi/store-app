import { getDataFromServer } from './apiClient';
import { AttrFromData } from '@/types/cardListTypes';

export const getProducts = async (page: number) => {
  const pagination = await getDataFromServer(
    `/products`,
    `pagination[page]=${page}&pagination[pageSize]=25`
  ).then((res) => res?.data?.data);

  const products = await Promise.allSettled(
    pagination.map((product: { id: number }) => getDataFromServer(`/products/${product?.id}`))
  ).then((results) => {
    return results.map((result: any) => result?.value?.data?.data);
  });

  const productsEA = products.map(({ id, attributes }: AttrFromData) => {
    const { name, images, price, gender, teamName } = attributes;

    return {
      id,
      attributes: {
        name,
        images,
        price,
        gender,
        teamName,
      },
    };
  });

  return productsEA;
};

export const getFilters = async () => {
  const endpoints = ['/genders', '/brands'];
  const filters = await Promise.allSettled(endpoints.map((ep) => getDataFromServer(ep)));

  const res = filters.map((promise, id) => {
    let data;

    if (promise.status === 'fulfilled') {
      let filters = promise?.value?.data?.data?.map(({ id, attributes }: AttrFromData) => {
        return { id, attributes };
      });

      switch (id) {
        case 0:
          data = { label: 'gender', name: 'Gender', values: filters };
          break;
        case 1:
          data = { label: 'brand', name: 'Brand', values: filters };
          break;
        default:
          data = { label: 'nothing', name: 'Nothing', values: [] };
          break;
      }
    } else if (promise.status === 'rejected') {
      data = promise?.reason;
    }

    return data;
  });

  res.push({
    label: 'price',
    name: 'Price',
    values: [{ id: 1, attributes: { name: 'Price undefined' } }],
  });
  res.push({
    label: 'color',
    name: 'Color',
    values: [{ id: 1, attributes: { name: 'Color undefined' } }],
  });

  return res;
};

export const getPaginationData = async () => {
  const paginationData = await getDataFromServer('/products');

  return paginationData?.data?.meta?.pagination;
};
