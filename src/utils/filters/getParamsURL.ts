import { Routes } from '@/constants/routes';
import { ActiveFiltersTypes } from '@/types/filterListTypes';

// function
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

  if (searchParams.toString() === '' && router.pathname === '/catalog/search') {
    searchParams.append('page', `${page}`);
  }

  if (searchParams.toString() !== '') {
    if (!/\/catalog\/search*/g.test(router.pathname)) {
      router.push(`${router.asPath}`);
      return;
    }

    searchParams.delete('page');
    searchParams.append('page', `${page}`);

    router.push(`${Routes.forParamsURL}?${searchParams.toString()}`, undefined, { shallow: true });
  }
};
