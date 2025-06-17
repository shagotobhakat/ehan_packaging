"use client";
import { useEffect } from "react";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Aos from "aos";
import "aos/dist/aos.css";
import "./globals.css";
import Head from "next/head";
import LoadingScreen from '../component/loader';
import BackTop from "@/component/backtotop";


export default function RootLayout ( { children, pageProps } ) {

  useEffect( () => {
    Aos.init( { duration: 1000 } );
  } );

  const [ loading, setLoading ] = React.useState( false );

  React.useEffect( () => {
    setTimeout( () => setLoading( true ), 6000 );
  }, [] );

  return (
    <html lang="en" >
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <title>EHAN Packaging Industry</title>
      <body>
        { loading ? (
          <React.Fragment>
            { children }
          </React.Fragment>
        ) : (
          <LoadingScreen />
        ) }
        <BackTop />
      </body>

    </html>
  );
}
