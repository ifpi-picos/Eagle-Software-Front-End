import '../styles/globals.css'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/logotipo.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logotipo.svg" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logotipo.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logotipo.svg" />
        <link rel="icon" href="/logotiopo.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
