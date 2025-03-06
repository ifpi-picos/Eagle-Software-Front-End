import '../styles/globals.css';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const authRoutes = ['/home', '/cadastroItem', '/faq', '/itensEncontrados', '/perfil'];

  useEffect(() => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

    if (authRoutes.includes(router.pathname) && !token) {
      router.replace('/login');
    } else {
      setLoading(false);
    }
  }, [router.pathname]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <Head>
        <title>Eagles Software</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="tecnologia, suporte, eficiência, plataforma" />
        <meta
          name="description"
          content="Eagles Software: A solução ideal para encontrar objetos perdidos com rapidez e eficiência."
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
