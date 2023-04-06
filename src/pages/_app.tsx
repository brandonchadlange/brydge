import { Inter } from "@next/font/google";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
import "react-tabs/style/react-tabs.css";
import "../styles/globals.css";

import DashboardLayout from "@/components/withDashboardLayout";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import HeaderNavMenu from "@/Molecules/NavMenu";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
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
      <main className={`${inter.variable} bg-[#F9F9F9]`}>
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
