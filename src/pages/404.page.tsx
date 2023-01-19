import Head from 'next/head'
import { PageNotFound } from '@components/PageNotFound'

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page not found - 404</title>
      </Head>

      <PageNotFound />
    </>
  )
}
