import { type ReactElement,type ReactNode, useEffect } from "react";
import { type AppProps } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { api } from "../utils/api";

import "../styles/globals.css";
import { type NextPage } from "next";
import Head from "next/head";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
// No changes to this type
export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

// Add generic type
type AppPropsWithLayout<P> = AppProps<P> & {
  Component: NextPageWithLayout<P>;
};

const queryClient = new QueryClient()
function MyApp({
  Component,
  pageProps,
}: AppPropsWithLayout<{ session: Session }>) {
  const getLayout = Component.getLayout || ((page) => page);
  useEffect(()=>{
    const checkDarkMode = function(){
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

    }
    checkDarkMode();
  },[])
  return (
    <SessionProvider session={pageProps.session}>
      <QueryClientProvider client={queryClient}>
        <Head>
          <title>Front End Mentor - Github Search App</title>
          <link rel="shortcut icon" href="/favicon-32x32.png" />
        </Head>
        {getLayout(<Component {...pageProps} />)}
      </QueryClientProvider>
    </SessionProvider>
  );
}

export default api.withTRPC(MyApp);
