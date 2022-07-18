import { useRouter } from 'next/router';

import Layout from '../components/layout/Layout'
import NavBar from '../components/NavBar/NavBar';

import {MusicPlayerProvider } from '../store/context';

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <MusicPlayerProvider>
    <Layout>
      {!(router.pathname ==="/login") && <NavBar/>}
      <Component {...pageProps} />
    </Layout>
    </MusicPlayerProvider>
  ) 
}

export default MyApp