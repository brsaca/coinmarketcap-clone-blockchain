import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MoralisProvider } from 'react-moralis'
import { CoinMarketProvider } from '../context/context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider
      serverUrl={process.env.NEXT_PUBLIC_SERVER ?? 'NEXT_PUBLIC_SERVER undefined'}
      appId={process.env.NEXT_PUBLIC_APP_ID ?? 'NEXT_PUBLIC_APP_ID undefined' }
    >
      <CoinMarketProvider>
        <Component {...pageProps} />
      </CoinMarketProvider>
    </MoralisProvider>
  )
}

export default MyApp
