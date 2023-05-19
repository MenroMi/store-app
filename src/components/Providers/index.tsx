// theme
import theme from '@/utils/mui/theme';

import { DehydratedState } from '@tanstack/react-query';
import { ReactNode } from 'react';

// providers
import { ThemeProvider } from '@mui/material/styles';
import AuthProvider from './auth';
import ReactQueryProvider from './queryClient';

export interface IProvidersProps {
    children: ReactNode;
    dehydrateState: DehydratedState;
// context
import FiltersProvider from '@/context/filtersContext';
import ProductsProvider from '@/context/productsContext';

// react query
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClientProvider, QueryClient, Hydrate, DehydratedState } from '@tanstack/react-query';

interface IProvidersProps {
  children: ReactNode;
  dehydrateState: DehydratedState;
}

export default function Providers({ children, dehydrateState }: IProvidersProps) {
    return (
        <ReactQueryProvider dehydrateState={dehydrateState}>
            <AuthProvider>
                <ThemeProvider theme={theme}>
                    {children}
                </ThemeProvider>
            </AuthProvider>
        </ReactQueryProvider>
    );
  const [queryClient] = useState(() => new QueryClient());
  const [showDevtools, setShowDevtools] = useState(false);

  useEffect(() => {
    // @ts-ignore
    window.toggleDevtools = () => setShowDevtools((old) => !old);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydrateState}>
        <ReactQueryDevtools initialIsOpen />
        {showDevtools && (
          <Suspense fallback={null}>
            <ReactQueryDevtoolsProduction />
          </Suspense>
        )}
        <ThemeProvider theme={theme}>
          <FiltersProvider>
            <ProductsProvider>{children}</ProductsProvider>
          </FiltersProvider>
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}
