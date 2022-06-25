import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import { ChakraProvider } from '@chakra-ui/react'
import { DBContext, DB_DEFAULT_VALUE } from '../contexts/db-context'

function MyApp({ Component, pageProps }: AppProps) {
  return <ChakraProvider>
    <DBContext.Provider value={DB_DEFAULT_VALUE}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DBContext.Provider>
  </ChakraProvider>
}

export default MyApp
