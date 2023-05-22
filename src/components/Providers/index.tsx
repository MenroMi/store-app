// theme
import theme from '@/utils/mui/theme';

// react-query
import { DehydratedState } from '@tanstack/react-query';
import { ReactNode } from 'react';

// context
import FiltersProvider from '@/context/filtersContext';
import ProductsProvider from '@/context/productsContext';
import StorageProvider from '@/context/sessionStorageContext';

// providers
import { ThemeProvider } from '@mui/material/styles';
import ReactQueryProvider from './queryClient';
import UserProvider from './user';

export interface IProvidersProps {
  children: ReactNode;
  dehydrateState: DehydratedState;
}

export default function Providers({ children, dehydrateState }: IProvidersProps) {
  return (
    <ThemeProvider theme={theme}>
      <ReactQueryProvider dehydrateState={dehydrateState}>
        <UserProvider>
          <StorageProvider>
            <FiltersProvider>
              <ProductsProvider>
                {children}
              </ProductsProvider>
            </FiltersProvider>
          </StorageProvider>
        </UserProvider>
      </ReactQueryProvider>
    </ThemeProvider>
  );
}
