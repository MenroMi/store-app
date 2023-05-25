import { getDataFromServer } from './apiClient';
import { AttrFromData } from '@/types/cardListTypes';

export const getFilters = async () => {
  const endpoints = ['/genders', '/brands', '/colors'];
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
        case 2:
          data = { label: 'color', name: 'Color', values: filters };
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

  return res;
};

export const getFilteredData = async (query: any) => {
  let url: string = `/products?populate=*&`;
  let page: number = 1;

  // console.log('Search API', query);

  if (typeof query !== 'undefined') {
    for (let prop in query) {
      if (!Array.isArray(query[prop])) {
        query[prop] = query[prop].split(',');
      }

      if (prop === 'price') {
        url += `filters[price][$between]=0&filters[price][$between]=${query[prop][0]}&`;
        continue;
      }

      if (prop === 'page') {
        page = query[prop].join();
        continue;
      }

      if (query[prop].length <= 0) {
        continue;
      }

      for (let key of query[prop]) {
        url += `filters[${prop}][name][$contains]=${key.slice(0, 1).toUpperCase()}${key.slice(1)}&`;
      }
    }
  }

  const products = await getDataFromServer(url, `pagination[page]=${page}&pagination[pageSize]=25`);

  return products?.data;
};
