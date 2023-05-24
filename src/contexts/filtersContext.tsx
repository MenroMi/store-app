// basic
import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { getParamsURL } from '@/utils/filters/getParamsURL';

// react-query
import { useQuery, dehydrate, QueryClient, DehydratedState } from '@tanstack/react-query';
import { getFilters } from '@/services/searchApi';
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
  // onChangePage: (e: React.MouseEvent<HTMLElement>) => void;
  // setPage: () => void;
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

  // const [page, setPage] = useState<number>(1);
  const [hide, setHide] = useState<boolean>(true);
  const [price, setPrice] = useState<number>(0);
  const [activeFilters, setActiveFilters] = useState<ActiveFiltersTypes>({});

  useEffect(() => {
    console.log(activeFilters);
    getParamsURL(router, activeFilters);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeFilters]);

  // useEffect(() => {
  //   if (typeof router.query === 'undefined') {
  //     return;
  //   } else {
  //     for (let key in router.query) {
  //       if (typeof router.query[key] === 'undefined') {
  //         continue;
  //       } else {
  //         setActiveFilters((prev: any) => {
  //           return {
  //             ...prev,
  //             [key]: Array.isArray(router.query[key])
  //               ? router.query[key]
  //               : (router.query[key] as string).split(','),
  //           };
  //         });
  //         continue;
  //       }
  //     }
  //   }
  // }, []);

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

  // if (contextFilters?.isLoading || contextFilters?.isFetching) {
  //   return <FullScreenLoader />;
  // }
  const isChecked = (e: any) => {
    let checked: boolean;
    let name: string;
    let label: string;
    let valuePrice: number;

    if (e.target.name === 'price') {
      name = e.target.name;
      valuePrice = e.target.value;

      setActiveFilters((prev) => {
        return { ...prev, [name]: [`${valuePrice}`] };
      });
      return null;
    } else {
      checked = e.target.checked;
      name = e.target.name.toLowerCase();
      label = e.target.getAttribute('datatype');
    }

    setActiveFilters((prev) => {
      if (label in prev) {
        return checked === true
          ? { ...prev, [label]: [...prev[label], name] }
          : { ...prev, [label]: prev[label].filter((item) => item !== name) };
      }

      return { ...prev, [label]: [name] };
    });
  };

  // const onChangePage = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
  //   let target = e.target as HTMLElement;

  //   if (target?.tagName === 'svg') {
  //     return target.dataset.testid === 'NavigateNextIcon'
  //       ? setPage((prev) => prev + 1)
  //       : setPage((prev) => prev - 1);
  //   }

  //   if (target?.tagName === 'BUTTON') {
  //     if (target.textContent) {
  //       return setPage(!+target?.textContent ? 1 : +target.textContent);
  //     }

  //     return;
  //   }
  // };

  console.log(router.query);
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
        onHideFilters,
        isChecked,
        // onChangePage: (e) => onChangePage(e),
        // setPage: () => setPage(1),
        activeFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export default FiltersProvider;
