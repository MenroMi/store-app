// theme
import theme from '@/utils/mui/theme';

// react-query
import { DehydratedState } from '@tanstack/react-query';
import { ReactNode } from 'react';

// context
import FiltersProvider from '@/contexts/filtersContext';
import StorageProvider from '@/contexts/sessionStorageContext';

// providers
import { ThemeProvider } from '@mui/material/styles';
import ReactQueryProvider from './queryClient';
import UserProvider from './user';
import { ModalProvider } from './modal';
import ImagesProvider from './images';

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
                <ImagesProvider>
                  <ModalProvider>{children}</ModalProvider>
                </ImagesProvider>
              </ProductsProvider>
            </FiltersProvider>
          </StorageProvider>
        </UserProvider>
      </ReactQueryProvider>
    </ThemeProvider>
  );
}
