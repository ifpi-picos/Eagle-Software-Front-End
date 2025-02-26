import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Eagles Software</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="tecnologia, suporte, eficiência, plataforma" />
        <meta name="description" content="Eagles Software: A solução ideal para encontrar objetos perdidos com rapidez e eficiência." />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;