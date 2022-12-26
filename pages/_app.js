import '../styles/globals.css'
import Script from 'next/script'
// pages/_app.js

import Layout from '../components/layout'

export default function MyApp({ Component, pageProps }) {
  return (
<>
<Script strategy="lazyOnload" src='https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.2/swiper-bundle.min.js'></Script>
<Script strategy="lazyOnload" src='https://cdnjs.cloudflare.com/ajax/libs/scrollReveal.js/4.0.9/scrollreveal.min.js'></Script>
<Script strategy="lazyOnload" src="./script.js"></Script>
    <Layout>
      <Component {...pageProps} />
    </Layout>
</>
  )
}
