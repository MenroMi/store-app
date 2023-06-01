import dynamic from 'next/dynamic';
import { useState, useEffect, ReactNode, Suspense } from 'react';

// react query
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClientProvider, QueryClient, Hydrate, DehydratedState } from '@tanstack/react-query';

import { IProvidersProps } from '.';

const ReactQueryDevtoolsProduction = dynamic(
  () =>
    import('@tanstack/react-query-devtools/build/lib/index.prod.js').then((d) => ({
      default: d.ReactQueryDevtools,
    })),
  { suspense: true }
);

export default function ReactQueryProvider({ children, dehydrateState }: IProvidersProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            staleTime: Infinity,
          },
        },
      })
  );
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
        {children}
      </Hydrate>
    </QueryClientProvider>
  );
}
