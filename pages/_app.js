import Layout from '../components/layout/Layout'
import NavBar from '../components/NavBar/NavBar';

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <NavBar/>
      <Component {...pageProps} />
    </Layout>
  ) 
}

export default MyApp
