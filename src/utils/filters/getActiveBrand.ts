import { IOtherActiveFilters, InputsData } from '@/types/filterListTypes';

const getActiveBrand: IOtherActiveFilters = (activeFilters, allFilters) => {
  let brands: any[] = [];

  for (let i = 0; i < allFilters?.length!; i++) {
    for (let k = 0; k < activeFilters?.length; k++) {
      if (activeFilters[k]?.label === allFilters![i]?.label && activeFilters[k].label === 'brand') {
        brands = [
          ...brands,
          {
            [activeFilters[k]?.name]: allFilters![i]?.values
              ?.filter((input: InputsData) => input?.id === activeFilters[k]?.id)[0]
              ?.attributes?.products?.data.map((info: InputsData) => info?.id),
          },
        ];
        continue;
      }
    }
  }

  return brands;
};

export default getActiveBrand;
