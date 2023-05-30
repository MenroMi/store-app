// basic
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getParamsURL } from '@/utils/filters/getParamsURL';

// react-query
import { useQuery } from '@tanstack/react-query';
import { getFilters } from '@/services/searchApi';
import { ActiveFiltersTypes, FilterListRender } from '@/types/filterListTypes';

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
  const firstRenderPage = typeof router.query.page === 'undefined' ? 1 : +router.query.page;
  const [page, setPage] = useState<number>(firstRenderPage);
  const [hide, setHide] = useState<boolean>(true);
  const [activeFilters, setActiveFilters] = useState<ActiveFiltersTypes>({});
  const lengthRouterQuery = Object.entries(router.query).length;

  useEffect(() => {
    getParamsURL(router, activeFilters, page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeFilters, page]);

  useEffect(() => {
    if (typeof router.query === 'undefined') {
      return;
    } else {
      for (let key in router.query) {
        if (typeof router.query[key] === 'undefined') {
          continue;
        } else {
          setActiveFilters((prev: any) => {
            return {
              ...prev,
              [key]: Array.isArray(router.query[key])
                ? (router.query[key] as string[])!.map(
                    (item: string) => `${item.slice(0, 1).toUpperCase()}${item.slice(1)}`
                  )
                : (router.query[key] as string)
                    .split(',')
                    .map((item) => `${item.slice(0, 1).toUpperCase()}${item.slice(1)}`),
            };
          });
          continue;
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (typeof lengthRouterQuery === 'undefined' || lengthRouterQuery <= 0) {
      setActiveFilters({});
    }
  }, [lengthRouterQuery]);

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

  const isChecked = (e: any) => {
    let checked: boolean;
    let name: string;
    let label: string;
    let valuePrice: number;
    const onCheckedPrice = (value: string) => {
      name = 'price';
      valuePrice = isNaN(+value) ? 0 : +value;

      setActiveFilters((prev) => {
        return { ...prev, [name]: [`${valuePrice}`], name: [] };
      });
      return;
    };

    switch (e.type) {
      case 'mouseup': {
        return onCheckedPrice(e.target.textContent);
      }
      case 'keydown': {
        return e.code === 'Enter' ? onCheckedPrice(e.target.value) : null;
      }
      default:
        checked = e.target.checked;
        name = e.target.name;
        label = e.target.getAttribute('datatype');

        if (label === 'brand') {
          setActiveFilters((prev) => {
            if (label in prev) {
              return checked === true
                ? { ...prev, [label]: [...prev[label], name], name: [] }
                : { ...prev, [label]: prev[label].filter((item) => item !== name), name: [] };
            }

            return { ...prev, [label]: [name], name: [] };
          });
        } else {
          setActiveFilters((prev) => {
            if (label in prev) {
              return checked === true
                ? { ...prev, [label]: [...prev[label], name] }
                : { ...prev, [label]: prev[label].filter((item) => item !== name) };
            }

            return { ...prev, [label]: [name] };
          });
        }

        return;
    }
  };

  console.log(activeFilters);

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
        isChecked,
        onHideFilters,
        setPage: (value) => setPage(value),
        setActiveFilters: (value) => setActiveFilters({ ...value }),
        activeFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export default FiltersProvider;
