import { ActiveFiltersTypes } from '@/context/filtersContext';
import { FilterListRender } from '@/types/filterListTypes';

interface IActiveFilters {
  (
    activeFilters: ActiveFiltersTypes[],
    allFilters: FilterListRender[] | any[] | undefined,
    allProducts: any
  ): any[];
}

interface IFilters {
  id: number;
  attributes: {
    name?: string;
    products?: {
      data?: {
        attributes: {
          teamName: string;
        };
      }[];
    };
  };
}

export const dataFromActiveFilters: IActiveFilters = (activeFilters, allFilters, allProducts) => {
  let dataFilters: any[];

  if (activeFilters && activeFilters.length >= 1) {
    // make general array with all filters

    dataFilters = allFilters!
      .map((filter) => {
        const { values } = filter;
        return values;
      })
      .flat(1);

    // sort and take products with active filters

    dataFilters = activeFilters.map((active) => {
      return dataFilters
        .filter((item: IFilters) => item?.attributes?.name === active?.name)
        .map((item: IFilters) => {
          return item?.attributes?.products?.data?.filter((product) => {
            return product?.attributes?.teamName === 'ea-team';
          });
        });
    });

    // all products make to one level in array

    try {
      dataFilters = dataFilters.flat(1).reduce((prev, curr) => {
        return [...prev, ...curr];
      }, []);

      if (dataFilters.length <= 0) {
        throw new Error();
      }
    } catch (err) {
      return false;
    }

    // take only products ID's

    dataFilters = dataFilters.map((item) => item.id);

    return allProducts.filter((product: { id: number }) => dataFilters.includes(product?.id));
  }

  return allProducts;
};
