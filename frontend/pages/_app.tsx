import NextNProgress from 'nextjs-progressbar';

import { ThemeProvider } from 'next-themes';

import '../styles/globals.css';
import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import i18n from 'i18n';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Header } from 'layout/Header';
import '@splidejs/react-splide/css';
import ScrollToTop from 'components/Scroll-to-top';

type TProps = Pick<AppProps, 'Component' | 'pageProps'> & {
  dehydratedState: any;
};

function MyApp({ Component, pageProps, dehydratedState }: TProps) {
  const { locale } = useRouter();
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: false,
            staleTime: 30000
          }
        }
      })
  );

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <QueryClientProvider client={queryClient}>
      {/* https://github.com/pacocoursey/next-themes/issues/52#issuecomment-956667938 */}
      <Hydrate state={dehydratedState}>
        <ThemeProvider attribute="class" enableColorScheme={false}>
          <Header />
          <NextNProgress
            height={3}
            color="#3A67B1"
            showOnShallow={false}
            options={{ showSpinner: false }}
          />
          <Component {...pageProps} />
          {/* <Footer /> */}
          <ScrollToTop />
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
