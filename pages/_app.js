import { useRouter } from 'next/router';

import Layout from '../components/layout/Layout'
import NavBar from '../components/NavBar/NavBar';

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      {!(router.pathname ==="/login") && <NavBar/>}
      <Component {...pageProps} />
    </Layout>
  ) 
}

export default MyApp
