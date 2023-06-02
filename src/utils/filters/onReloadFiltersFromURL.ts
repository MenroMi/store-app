import { ActiveFiltersTypes } from '@/types/filterListTypes';
import { NextRouter } from 'next/router';

const onReloadFiltersFromURL = (
  router: NextRouter,
  setActiveFilters: React.Dispatch<React.SetStateAction<ActiveFiltersTypes>>
) => {
  if (typeof router.query === 'undefined') {
    return;
  } else {
    for (let key in router.query) {
      if (typeof router.query[key] === 'undefined') {
        continue;
      } else {
        setActiveFilters((prev: ActiveFiltersTypes) => {
          return {
            ...prev,
            [key]: Array.isArray(router.query[key])
              ? (router.query[key] as string[])!.map(
                  (item: string) => `${item.slice(0, 1).toUpperCase()}${item.slice(1)}`
                )
              : (router.query[key] as string)
                  .split(',')
                  .map((item) => `${item.slice(0, 1).toUpperCase()}${item.slice(1)}`),
          };
        });
        continue;
      }
    }
  }
};

export default onReloadFiltersFromURL;
