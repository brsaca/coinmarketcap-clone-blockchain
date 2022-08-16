import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MoralisProvider } from 'react-moralis'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider
    //serverUrl="https://yxqnwqpltdod.usemoralis.com:2053/server"
    //appId="3kQBfpYa66LCc8bF7dELoqHI8EC9pqPkZ0JJYfjh"
      serverUrl={process.env.NEXT_PUBLIC_SERVER ?? 'NEXT_PUBLIC_SERVER undefined'}
      appId={process.env.NEXT_PUBLIC_APP_ID ?? 'NEXT_PUBLIC_APP_ID undefined' }
    >
      <Component {...pageProps} />
    </MoralisProvider>
  )
}

export default MyApp
