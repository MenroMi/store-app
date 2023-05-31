import { Routes } from '@/constants/routes';
import { ActiveFiltersTypes } from '@/types/filterListTypes';
export const getParamsURL = (router: any, filters: ActiveFiltersTypes, page: number) => {
  const searchParams = new URLSearchParams(
    router.query as string | string[][] | Record<string, string> | URLSearchParams | undefined
  );
  let values: string[];

  for (let _ in filters) {
    for (let [key, _] of searchParams.entries()) {
      searchParams.delete(key);
    }
  }

  for (let key in filters) {
    if (filters.hasOwnProperty(key)) {
      values = filters[key];

      for (let i = 0; i < values.length; i++) {
        searchParams.append(key, values[i]);
      }
    }
  }

  if (searchParams.size === 0 && router.pathname === '/catalog/search') {
    searchParams.append('page', `${page}`);
  }

  if (searchParams.size > 0) {
    if (router.pathname === '/catalog/products/[id]' && typeof router.query.id !== 'undefined') {
      router.push(`${Routes.products}/${router.query.id}`);
      return;
    }
    searchParams.delete('page');

    searchParams.append('page', `${page}`);

    router.push(`${Routes.forParamsURL}?${searchParams.toString()}`, undefined, { shallow: true });
  }
};
