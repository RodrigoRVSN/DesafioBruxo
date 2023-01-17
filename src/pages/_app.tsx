import { AppProps } from 'next/app'
import React from 'react'
import { globalStyles } from '@App/core/styles/globalCss'

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()

  return <Component {...pageProps} />
}

export default MyApp
