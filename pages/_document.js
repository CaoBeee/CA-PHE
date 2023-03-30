import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
		<link rel="stylesheet" href="../styles/styles.css" />
		<meta charset="UTF-8" />
	  </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}