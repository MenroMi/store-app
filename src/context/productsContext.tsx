// basic
import React, { useState } from 'react';

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
  takeOnlyPrice: () => number[] | any[];
}

// fc
const ProductsProvider: React.FC<IProductsProvider> = ({ children }) => {
  const [page, setPage] = useState<number>(0);

  const { isLoading, isFetched, isError, error, data } = useQuery({
    queryKey: ['all', page],
    queryFn: () => getProducts(page),
    refetchOnWindowFocus: false,
  });

  const takeOnlyPrice = () => {
    if (typeof data === 'undefined') {
      return [];
    }
    return data?.map((product: InputsData) => product?.attributes?.price);
  };

  return (
    <ProductsContext.Provider
      value={{
        takeOnlyPrice,
        isLoading,
        isFetched,
        isError,
        error,
        data,
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
