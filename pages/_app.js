import "../styles/globals.css";
import React from 'react';
import { Layout } from "../components";
import { Toaster} from 'react-hot-toast'
import { AppContextProvider} from '../context/StateContext';

export default function App({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </AppContextProvider>
  ); 
}
