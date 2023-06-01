import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Providers from '@/providers';
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers dehydrateState={pageProps.dehydratedState}>
      <NextNProgress
        color="#FE645E"
        startPosition={0.3}
        stopDelayMs={200}
        height={4}
        showOnShallow={true}
        options={{
          showSpinner: false,
        }}
      />
      <Component {...pageProps} />
    </Providers>
  );
}
