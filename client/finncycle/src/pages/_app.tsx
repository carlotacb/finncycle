import '../../styles/globals.css';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import type { AppProps } from 'next/app'

import Layout from "../components/layout";
import Head from 'next/head';

declare global {
  interface Window { localStorage: any; }
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <>
        <Head>
          <title>FinnCycle</title>
          <meta name="robots" content="index" />
        </Head>
        <Component {...pageProps} />
      </>
    </Layout>
  )
}
