import { IActiveFilters } from '@/types/filterListTypes';
import getActiveBrand from './getActiveBrand';
import getActiveProductsIDs from './getActiveProductsIDs';
import getActualProducts from './getActualProducts';

export const dataFromActiveFilters: IActiveFilters = (activeFilters, allFilters, allProducts) => {
  let brandFilter: {
    [x: string]: number[];
  }[] = [];
  let otherFilters: any;
  let res: any[];

  if (activeFilters && activeFilters.length >= 1) {
    try {
      // sort and take products with active filters

      brandFilter = getActiveBrand(activeFilters, allFilters);

      // check other filters

      otherFilters = getActiveProductsIDs(activeFilters, allFilters);

      // return all actual products

      res = getActualProducts(brandFilter, otherFilters, allProducts);

      if (res.length <= 0) {
        throw new Error();
      }
    } catch (err) {
      return false;
    }

    return res;
  }

  return allProducts;
};
