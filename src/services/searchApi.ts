import { getDataFromServer } from './apiClient';

export const getProducts = async () => {
  return getDataFromServer('/products').then((res) => res.data);
};

export const getFilters = async () => {
  const endpoints = ['/genders', '/brands'];
  const filters = await Promise.allSettled(endpoints.map((ep) => getDataFromServer(ep)));

  const res = filters.map((promise, id) => {
    let data;

    if (promise.status === 'fulfilled') {
      switch (id) {
        case 0:
          data = { label: 'gender', name: 'Gender', values: promise?.value?.data?.data };
          break;
        case 1:
          data = { label: 'brand', name: 'Brand', values: promise?.value?.data?.data };
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
    label: 'kids',
    name: 'Kids',
    values: [
      { id: 1, attributes: { name: 'Boys' } },
      { id: 2, attributes: { name: 'Girls' } },
    ],
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
