// basik
import dynamic from 'next/dynamic';
import { useState, useEffect, ReactNode, Suspense } from 'react';

// theme
import theme from '@/utils/mui/theme';
import { ThemeProvider } from '@mui/material/styles';

// context
import FiltersProvider from '@/context/filtersContext';

// react query
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClientProvider, QueryClient, Hydrate, DehydratedState } from '@tanstack/react-query';

interface IProvidersProps {
  children: ReactNode;
  dehydrateState: DehydratedState;
}

const ReactQueryDevtoolsProduction = dynamic(
  () =>
    import('@tanstack/react-query-devtools/build/lib/index.prod.js').then((d) => ({
      default: d.ReactQueryDevtools,
    })),
  { suspense: true }
);

export default function Providers({ children, dehydrateState }: IProvidersProps) {
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
          <FiltersProvider>{children}</FiltersProvider>
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}
