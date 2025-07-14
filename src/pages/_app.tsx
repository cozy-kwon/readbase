import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { globalStyles } from '@/common';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require('@/mocks');
}

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
