import '../styles/globals.css';
import 'react-tabs/style/react-tabs.css';
import type { AppProps } from 'next/app';
import { Montserrat, Syne } from '@next/font/google';
import { Toaster } from 'react-hot-toast';

import { UserContextProvider } from '../context';
import HeaderNavMenu from '@/Molecules/NavMenu';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserContextProvider>
      <main className={`${syne.variable} ${montserrat.variable}`}>
        <Toaster />
        <HeaderNavMenu />
        <Component {...pageProps} />
      </main>
    </UserContextProvider>
  );
}
