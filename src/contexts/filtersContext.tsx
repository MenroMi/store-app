// basic
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// react-query
import { useQuery } from '@tanstack/react-query';

// services
import { getFilters } from '@/services/searchApi';

// utils
import { onCheckedCheckbox, onCheckedPrice } from '@/utils/filters/onActiveCheckbox';
import onReloadFiltersFromURL from '@/utils/filters/onReloadFiltersFromURL';
import { getParamsURL } from '@/utils/filters/getParamsURL';

// interface
import { ActiveFiltersTypes, FilterListRender } from '@/types/filterListTypes';

interface IFiltersProvider {
  children: React.ReactNode;
}

export interface IFiltersContext {
  hide: boolean;
  onHide: () => void;
  isFetched: boolean;
  isLoading: boolean;
  isError: boolean;
  error: Error | unknown;
  data: FilterListRender[] | undefined;
  onHideFilters: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  isChecked: (e: React.SyntheticEvent<Element, Event> | Event, value?: number | number[]) => void;
  activeFilters: ActiveFiltersTypes;
  setPage: (x: number) => void;
  setActiveFilters: (x: ActiveFiltersTypes) => void;
}

export interface AllFilterTypes {
  label: string;
  values: object[];
}

// context
export const FiltersContext = React.createContext<IFiltersContext | null>(null);

// fc
const FiltersProvider: React.FC<IFiltersProvider> = ({ children }) => {
  const router = useRouter();
  const lengthRouterQuery = Object.entries(router.query).length;
  const firstRenderPage = typeof router.query.page === 'undefined' ? 1 : +router.query.page;

  const [page, setPage] = useState<number>(firstRenderPage);
  const [hide, setHide] = useState<boolean>(true);
  const [activeFilters, setActiveFilters] = useState<ActiveFiltersTypes>({});

  useEffect(() => {
    onReloadFiltersFromURL(router, setActiveFilters); // work with first render url params
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getParamsURL(router, activeFilters, page); // dynamic change filters and url params
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeFilters, page]);

  useEffect(() => {
    // when user click from another page on catalog this useeffect remove all active params from local state
    if (
      typeof lengthRouterQuery === 'undefined' ||
      (lengthRouterQuery === 1 && typeof router.query.page !== 'undefined')
    ) {
      setActiveFilters({ page: ['1'] });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lengthRouterQuery]);

  const { data, error, isError, isFetched, isLoading } = useQuery({
    queryKey: ['filters'],
    queryFn: getFilters,
    refetchOnWindowFocus: false,
  });

  const onHide = () => setHide(!hide);

  const onHideFilters = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    let target = e.target as HTMLButtonElement;

    if (target?.dataset?.overlay) {
      setHide(true);
    }
    return;
  };

  const isChecked = (
    e: React.SyntheticEvent<Element, Event> | Event,
    value?: number | number[]
  ): void => {
    let targetBtns = e.target as HTMLButtonElement;
    let target = e.target as HTMLButtonElement;
    let { checked } = e.target as HTMLInputElement;
    let keyboardEnter = e as React.KeyboardEvent<HTMLDivElement>;

    let checkedRes: boolean;
    let nameRes: string;
    let label: string;

    switch (e.type) {
      case 'mouseup': {
        return onCheckedPrice(setActiveFilters, targetBtns.textContent || '');
      }
      case 'keydown': {
        if (keyboardEnter.code === 'Enter') {
          return onCheckedPrice(setActiveFilters, targetBtns.value || '');
        }

        return;
      }
      default:
        checkedRes = checked;
        nameRes = targetBtns.name;
        label = target.getAttribute('datatype') || '';
        if (label === 'brand') {
          onCheckedCheckbox(setActiveFilters, checkedRes, nameRes, label, { name: [] });
        } else {
          onCheckedCheckbox(setActiveFilters, checkedRes, nameRes, label);
        }

        return;
    }
  };

  return (
    <FiltersContext.Provider
      value={{
        activeFilters,
        isFetched,
        isLoading,
        isError,
        error,
        data,
        hide,
        onHide,
        isChecked,
        onHideFilters,
        setPage: (value) => setPage(value),
        setActiveFilters: (value) => setActiveFilters({ ...value }),
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export default FiltersProvider;
