import '@/styles/globals.css';
import React, { useState, useEffect } from 'react'
import { ThemeProvider } from '@mui/material/styles';
import { QueryClientProvider, QueryClient, Hydrate } from '@tanstack/react-query';
import dynamic from 'next/dynamic';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const ReactQueryDevtoolsProduction = dynamic(
	() =>
		import('@tanstack/react-query-devtools/build/lib/index.prod.js').then((d) => ({
			default: d.ReactQueryDevtools,
		})),
	{ suspense: true }
);

import type { AppProps } from 'next/app';
import theme from '../utils/mui/theme';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const [showDevtools, setShowDevtools] = useState(false);

  useEffect(() => {
		// @ts-ignore
		window.toggleDevtools = () => setShowDevtools((old) => !old);
	}, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydrateState}>
        <ReactQueryDevtools initialIsOpen />
        {showDevtools && (
        <React.Suspense fallback={null}>
          <ReactQueryDevtoolsProduction />
        </React.Suspense>
      )}
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}
