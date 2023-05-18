// basic
import React, { useState } from 'react';

// react-query
import { useQuery, dehydrate, QueryClient } from '@tanstack/react-query';
import { getFilters } from '@/services/searchApi';
import { ActiveFiltersTypes, FilterListRender } from '@/types/filterListTypes';
import { useParamsURL } from '@/components/hooks/useParamsURL';

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
  activeFilters: ActiveFiltersTypes[];
}

export interface AllFilterTypes {
  label: string;
  values: object[];
}

// context
export const FiltersContext = React.createContext<IFiltersContext | null>(null);

// fc
const FiltersProvider: React.FC<IFiltersProvider> = ({ children }) => {
  const [hide, setHide] = useState<boolean>(false);
  const [activeFilters, setActiveFilters] = useState<ActiveFiltersTypes[]>([]);
  const { handleFiltersURL } = useParamsURL();

  const { isFetched, isLoading, isError, error, data } = useQuery({
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
    let name = e.target.name;
    let checked = e.target.checked;
    let id = +e.target.id;
    let label = e.target.getAttribute('datatype');

    if (checked === false) {
      setActiveFilters((prev) => [...prev.filter((filter) => filter.name !== name)]);
      // handleFiltersURL(data?., data?.values);
      return;
    }

    // handleFiltersURL(data?.label, data?.values);
    setActiveFilters((prev) => [...prev, { label, id, name, checked }]);
  };

  return (
    <FiltersContext.Provider
      value={{
        isFetched,
        isLoading,
        isError,
        error,
        data,
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

export const getStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['filters', getFilters]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
