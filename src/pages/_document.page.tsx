import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          {/* Change favicon. /favicon.png in public default */}
          <link rel="shortcut icon" href="/assets/logo.png" type="image/png" />
          {/* Change font - Roboto default */}
          <link
            href="https://fonts.googleapis.com/css2?family=Jolly+Lodger&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
