import { AppProps } from 'next/app';
import Head from "next/head";
import React, {useState} from "react";

import 'styles/globals.css'
import "styles/tailwind.css";
import "styles/index.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
