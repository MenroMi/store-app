import { ActiveFiltersTypes } from '@/types/filterListTypes';
import { NextRouter } from 'next/router';
export const getParamsURL = (router: NextRouter, filters: ActiveFiltersTypes, page: number) => {
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

  if (searchParams.size === 0) {
    searchParams.append('page', `${page}`);
  }

  if (searchParams.size > 0) {
    searchParams.delete('page');

    searchParams.append('page', `${page}`);

    router.push(`${router.pathname}?${searchParams.toString()}`);
  }
};
