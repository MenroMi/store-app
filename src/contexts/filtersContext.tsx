// basic
import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { getParamsURL } from '@/utils/filters/getParamsURL';

// react-query
import { useQuery, dehydrate, QueryClient, DehydratedState } from '@tanstack/react-query';
import { getFilteredData, getFilters } from '@/services/searchApi';
import { ActiveFiltersTypes, FilterListRender } from '@/types/filterListTypes';
import FullScreenLoader from '@/components/UI/Loader/FullScreenLoader';

// interface
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
  const [hide, setHide] = useState<boolean>(true);
  const [activeFilters, setActiveFilters] = useState<ActiveFiltersTypes>({});

  useEffect(() => {
    getParamsURL(router, activeFilters);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeFilters]);

  const contextFilters = useQuery({
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

  if (contextFilters?.isLoading || contextFilters?.isFetching) {
    return <FullScreenLoader />;
  }
  const isChecked = (e: any) => {
    let checked = e.target.checked;
    let name: string = e.target.name;
    let label: string = e.target.getAttribute('datatype');

    setActiveFilters((prev) => {
      if (label in prev) {
        return checked === true
          ? { ...prev, [label]: [...prev[label], name] }
          : { ...prev, [label]: prev[label].filter((item) => item !== name) };
      }

      return { ...prev, [label]: [name] };
    });
  };

  return (
    <FiltersContext.Provider
      value={{
        isFetched: contextFilters?.isFetched,
        isLoading: contextFilters?.isLoading,
        isError: contextFilters?.isError,
        error: contextFilters?.error,
        data: contextFilters?.data,
        hide,
        onHide,
        onHideFilters,
        isChecked,
        activeFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export default FiltersProvider;
