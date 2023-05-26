// theme
import theme from '@/utils/mui/theme';

// react-query
import { DehydratedState } from '@tanstack/react-query';
import { ReactNode } from 'react';

// context
import FiltersProvider from '@/context/filtersContext';
import ProductsProvider from '@/context/productsContext';
import AuthProvider from './auth';

// providers
import { ThemeProvider } from '@mui/material/styles';
import ReactQueryProvider from './queryClient';
import { ShoppingCartProvider } from '@/context/ShoppingCartContext';

export interface IProvidersProps {
  children: ReactNode;
  dehydrateState: DehydratedState;
}

export default function Providers({ children, dehydrateState }: IProvidersProps) {
  return (
    <ReactQueryProvider dehydrateState={dehydrateState}>
      <AuthProvider>
        <ShoppingCartProvider>
          <FiltersProvider>
            <ProductsProvider>
              <ThemeProvider theme={theme}>{children}</ThemeProvider>
            </ProductsProvider>
          </FiltersProvider>
        </ShoppingCartProvider>
      </AuthProvider>
    </ReactQueryProvider>
  );
}
