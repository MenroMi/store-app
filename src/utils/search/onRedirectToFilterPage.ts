import { IFiltersContext } from '@/contexts/filtersContext';
import { Dispatch, SetStateAction } from 'react';

const resetFiltersAndCloseSearch = (
  defaultValue: { [x: string]: string[] },
  defaultPage: number,
  defaultBool: boolean,
  context: IFiltersContext | null,
  setSearchOpen: Dispatch<SetStateAction<boolean>>
) => {
  context!.setActiveFilters(defaultValue);
  context!.setPage(defaultPage);
  setSearchOpen(defaultBool);
  return;
};

const onRedirectToFilterPage = (
  context: IFiltersContext | null,
  value: string,
  setSearchOpen: Dispatch<SetStateAction<boolean>>
) => {
  if (value.length <= 0) {
    resetFiltersAndCloseSearch(
      {
        name: [],
        page: ['1'],
      },
      1,
      false,
      context,
      setSearchOpen
    );
  } else {
    resetFiltersAndCloseSearch(
      {
        name: [`${value}`],
      },
      1,
      false,
      context,
      setSearchOpen
    );
  }
};

export default onRedirectToFilterPage;
