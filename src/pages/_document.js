import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="pt-BR">
                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="robots" content="index, follow" />
                    <meta name="keywords" content="tecnologia, suporte, eficiência, plataforma" />
                    <meta
                        name="description"
                        content="Descubra os benefícios da nossa plataforma: compatibilidade, eficiência e suporte completo para sua equipe."
                    />

                    <link rel="icon" type="image/svg+xml" href="/logotipo.svg" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/logotipo.svg" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/logotipo.svg" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/logotipo.svg" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;