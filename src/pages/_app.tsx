import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Montserrat, Syne } from '@next/font/google'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne'
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat'
})


export default function App({ Component, pageProps }: AppProps) {
  return(
    <main className={`${syne.variable} ${montserrat.variable}`}>
      <Component {...pageProps} />
    </main>
  ) 
}