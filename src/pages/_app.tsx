import { Montserrat, Syne } from "@next/font/google";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
import "react-tabs/style/react-tabs.css";
import "../styles/globals.css";

import DashboardLayout from "@/components/withDashboardLayout";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import HeaderNavMenu from "@/Molecules/NavMenu";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const EmptyLayout = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  const router = useRouter();

  const AppLayout =
    router.pathname.includes("/login") ||
    router.pathname.includes("/signup") ||
    router.pathname.includes("/onboarding")
      ? EmptyLayout
      : DashboardLayout;

  return (
    <QueryClientProvider client={queryClient}>
      <main className={`${syne.variable} ${montserrat.variable} bg-[#F9F9F9]`}>
        <Toaster />
        <HeaderNavMenu />
        {/* <DashboardLayout>
        </DashboardLayout> */}
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </main>
    </QueryClientProvider>
  );
}
