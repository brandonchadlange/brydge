import { Montserrat, Syne } from "@next/font/google";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
import "react-tabs/style/react-tabs.css";
import "../styles/globals.css";

import HeaderNavMenu from "@/Molecules/NavMenu";
import { SessionProvider } from "next-auth/react";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <main className={`${syne.variable} ${montserrat.variable}`}>
        <Toaster />
        <HeaderNavMenu />
        <Component {...pageProps} />
      </main>
    </QueryClientProvider>
  );
}
