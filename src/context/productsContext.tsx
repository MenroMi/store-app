// basic
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

// react-query
import { useQuery, dehydrate, QueryClient } from '@tanstack/react-query';
import { getProducts } from '@/services/searchApi';
import { AttrFromData } from '@/types/cardListTypes';
import { InputsData } from '@/types/filterListTypes';

// context
export const ProductsContext = React.createContext<IProductsContext | null>(null);

// interface
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
  takeOnlyPrice: () => number[] | any[];
  onChangePage: (event: React.ChangeEvent<unknown>, value: number) => void;
}

// fc
const ProductsProvider: React.FC<IProductsProvider> = ({ children }) => {
  const router = useRouter();
  const { page } = router.query;
  let currentPage: number;

  if (typeof page === 'undefined') {
    currentPage = 1;
  } else if (Array.isArray(page)) {
    currentPage = 1;
  } else {
    currentPage = parseInt(page);
  }

  const { isLoading, isFetched, isError, error, data } = useQuery({
    queryKey: ['all', currentPage],
    queryFn: () => getProducts(currentPage),
  });

  useEffect(() => {
    if (currentPage === 1 && router.asPath.search(/\d/) === -1) {
      router.push(`?page=1`);
    }
  }, []);

  const takeOnlyPrice = () => {
    if (typeof data === 'undefined') {
      return [];
    }
    return data?.map((product: InputsData) => product?.attributes?.price);
  };

  const onChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    router.push(`?page=${value}`);
  };

  return (
    <ProductsContext.Provider
      value={{
        takeOnlyPrice,
        onChangePage,
        isLoading,
        isFetched,
        isError,
        error,
        data,
        page: currentPage,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;

export const getStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['filters', getProducts]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
