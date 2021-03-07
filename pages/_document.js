import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link
            rel='preload'
            href='/fonts/inter-var-latin.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />
          <link rel='shortcut icon' href='/static/favicons/favicon.ico' />
        </Head>
        <body className=''>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
