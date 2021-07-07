import { AuthProvider } from '../contexts/AuthContext'

import {AppProps} from 'next/app'
import {ChakraProvider} from '@chakra-ui/react'
import {ReactQueryDevtools} from 'react-query/devtools'
import {theme} from '../styles/theme'

import { QueryClientProvider} from 'react-query'
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext'
import { makeServer } from '../services/mirage'
import { queryClient } from '../services/queryClient'

if (process.env.NODE_ENV=== 'development'){
  makeServer();
}



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <SidebarDrawerProvider>
          
            <Component {...pageProps}/>
          
          </SidebarDrawerProvider>
        </ChakraProvider>
        <ReactQueryDevtools/>
    </QueryClientProvider>
  // </AuthProvider>
  )
}

export default MyApp
