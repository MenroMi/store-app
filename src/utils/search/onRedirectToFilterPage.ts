import { IFiltersContext } from '@/providers/filters';
import { Dispatch, SetStateAction } from 'react';

const onResetFiltersAndCloseSearch = (
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
    onResetFiltersAndCloseSearch(
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
    onResetFiltersAndCloseSearch(
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
