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
  onHideFilters: any;
  isChecked: any;
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

  const onHideFilters = (e: any): void => {
    if (e.target?.dataset?.overlay) {
      setHide(true);
    }
    return;
  };

  const isChecked = (e: any) => {
    let checked: boolean;
    let name: string;
    let label: string;

    switch (e.type) {
      case 'mouseup': {
        return onCheckedPrice(setActiveFilters, e.target.textContent);
      }
      case 'keydown': {
        return e.code === 'Enter' ? onCheckedPrice(setActiveFilters, e.target.value) : null;
      }
      default:
        checked = e.target.checked;
        name = e.target.name;
        label = e.target.getAttribute('datatype');
        if (label === 'brand') {
          onCheckedCheckbox(setActiveFilters, checked, name, label, { name: [] });
        } else {
          onCheckedCheckbox(setActiveFilters, checked, name, label);
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
