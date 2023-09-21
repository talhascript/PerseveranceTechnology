import '@/styles/globals.css'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function App({ Component, pageProps }) {
  return (
  <>
  <Head>
    <title>Perseverance Technology</title>
  </Head>
  <Navbar />
  <Component {...pageProps} />
  <Footer/>

  </>
  )
}
