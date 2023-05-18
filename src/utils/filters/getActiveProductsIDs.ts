import { ActiveFiltersTypes } from '@/context/filtersContext';
import { IFilters, IOtherActiveFilters } from '@/types/filterListTypes';

const getActiveProductsIDs: IOtherActiveFilters = (activeFilters, allFilters) => {
  let result: any = {};

  const getProductsIDs = (filter: ActiveFiltersTypes) => {
    return allFilters
      ?.map((flr) => {
        return (
          flr?.label === filter?.label &&
          flr.values.map((input: IFilters) => {
            return (
              input?.attributes?.name === filter?.name &&
              input?.attributes?.products?.data?.map((item) => item?.id)
            );
          })
        );
      })
      .flat(1)
      .filter((filter) => filter !== false)
      .flat(1);
  };

  activeFilters.map((filter) => {
    if (filter?.label !== 'brand' && !result[filter?.label]) {
      result[filter?.label] = getProductsIDs(filter);
    } else if (filter?.label !== 'brand' && result[filter?.label]) {
      result[filter?.label] = [...result[filter?.label], ...getProductsIDs(filter)!];
    }
  });

  for (let key in result) {
    result[key].map((item: object[] | undefined) => {
      if (item === undefined) {
        throw new Error();
      }

      return item;
    });
  }

  return result;
};

export default getActiveProductsIDs;
