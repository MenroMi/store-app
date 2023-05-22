import { getDataFromServer } from './apiClient';
import { AttrFromData } from '@/types/cardListTypes';
import onFilterData from '@/utils/filters/getFilteredDataRecursion';
import qs, { ParsedQs } from 'qs';

export const getProducts = async (page: number, size: number = 25) => {
  const pagination = await getDataFromServer(
    `/products`,
    `pagination[page]=${page}&pagination[pageSize]=${size}`
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

export const getFilteredData = async (query: any) => {
  let url: string = `/products?`;
  let { total } = await getPaginationData();
  let parsingQuery: any = qs.parse(query);

  if (typeof parsingQuery !== 'undefined') {
    for (let prop in parsingQuery) {
      if (!Array.isArray(parsingQuery[prop])) {
        url += `populate[${prop}][filters][name][$eq]=${parsingQuery[prop]}&`;
        continue;
      }

      if (parsingQuery[prop].length <= 0) {
        continue;
      }

      for (let key of parsingQuery[prop]) {
        url += `populate[${prop}][filters][name][$eq]=${key}&`;
      }
    }
  }

  const products = await getDataFromServer(url, `pagination[page]=1&pagination[pageSize]=${total}`);

  return onFilterData(products?.data?.data, 0, parsingQuery, products?.data?.data);
};
