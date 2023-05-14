import '@/styles/globals.css';
import { useState } from 'react'
import { ThemeProvider } from '@mui/material/styles';
import { QueryClientProvider, QueryClient, Hydrate } from '@tanstack/react-query';
import dynamic from 'next/dynamic';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import type { AppProps } from 'next/app';
import theme from '../utils/mui/theme';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydrateState}>
        <ReactQueryDevtools></ReactQueryDevtools>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}
