// basic
import React from 'react';
import { useRouter } from 'next/router';

// react-query
import { useQuery, dehydrate, QueryClient } from '@tanstack/react-query';
import { getPaginationData, getProducts } from '@/services/searchApi';

// context
export const ProductsContext = React.createContext<IProductsContext | null>(null);

// interface
import { AttrFromData } from '@/types/cardListTypes';
import { InputsData } from '@/types/filterListTypes';
import { GetServerSidePropsContext } from 'next';

interface IProductsProvider {
  children: React.ReactNode;
}

export interface IProductsContext {
  data: AttrFromData[] | undefined;
  isFetched: boolean;
  isLoading: boolean;
  isError: boolean;
  error: Error | unknown;
  page: number;
  maxPage: number;
  takeOnlyPrice: () => number[] | any[];
  onChangePage: (event: React.ChangeEvent<unknown>, value: number) => void;
}

// fc
const ProductsProvider: React.FC<IProductsProvider> = ({ children }) => {
  const router = useRouter();
  const { page } = router.query;
  let currentPage: number;

  const paginationQuery = useQuery({
    queryKey: ['pagination'],
    queryFn: () => getPaginationData(),
  });

  if (typeof page === 'undefined') {
    currentPage = 1;
  } else if (Array.isArray(page)) {
    currentPage = 1;
  } else if (paginationQuery?.data?.pageCount < parseInt(page) || parseInt(page) <= 0) {
    currentPage = 1;
  } else {
    currentPage = parseInt(page);
  }

  const productsQuery = useQuery({
    queryKey: ['all', currentPage],
    queryFn: () => getProducts(currentPage),
  });

  const takeOnlyPrice = () => {
    if (typeof productsQuery?.data === 'undefined') {
      return [];
    }
    return productsQuery?.data?.map((product: InputsData) => product?.attributes?.price);
  };

  const onChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    router.push(`?page=${value}`);
  };

  return (
    <ProductsContext.Provider
      value={{
        takeOnlyPrice,
        onChangePage,
        isLoading: productsQuery?.isLoading,
        isFetched: productsQuery?.isFetched,
        isError: productsQuery?.isError,
        error: productsQuery?.error,
        data: productsQuery?.data,
        page: currentPage,
        maxPage: paginationQuery?.data?.pageCount,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
