import { ActiveFiltersTypes } from '@/types/filterListTypes';

export const onCheckedPrice = (
  setActiveFilters: React.Dispatch<React.SetStateAction<ActiveFiltersTypes>>,
  value: string
) => {
  let valuePrice: number;
  let name: string = 'price';

  valuePrice = isNaN(+value) ? 0 : +value;

  setActiveFilters((prev) => {
    return { ...prev, [name]: [`${valuePrice}`], name: [] };
  });
  return;
};
export const onCheckedCheckbox = (
  setActiveFilters: React.Dispatch<React.SetStateAction<ActiveFiltersTypes>>,
  isChecked: boolean,
  name: string,
  label: string,
  ...rest: any[]
) => {
  setActiveFilters((prev) => {
    if (label in prev) {
      return isChecked === true
        ? { ...prev, [label]: [...prev[label], name], ...rest[0] }
        : { ...prev, [label]: prev[label].filter((item) => item !== name), ...rest[0] };
    }

    return { ...prev, [label]: [name], ...rest[0] };
  });
  return;
};
