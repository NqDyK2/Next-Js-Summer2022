import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AppPropsWithLayout } from '../models/layout'
import Layout from '../Layout'

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const LayoutWrapper = Component.Layout ?? Layout;

  return  <LayoutWrapper>
            <Component {...pageProps} />
          </LayoutWrapper>
}

export default MyApp
