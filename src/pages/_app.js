

import Head from 'next/head';
import SEO from '@/METADATA';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Aos from 'aos';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { DefaultSeo } from 'next-seo';
import '@/styles/globals.css';
export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({ once: true, duration: 1500 });
    Aos.refresh();
  }, []);
  return (
    <>
      <Head>
        <link rel='icon' type={'image/png'} href={SEO.logo} />
      </Head>
      <DefaultSeo
        title={SEO.title}
        canonical={SEO.canonical}
        description={SEO.description}
        openGraph={{
          title: SEO.title,
          images: [
            {
              url: `https://rif.ng/${SEO.logo}`,
            },
          ],
          url: SEO.openGraph.url,
          siteName: SEO.openGraph.site_name,
          locale: SEO.openGraph.locale,
          type: SEO.openGraph.type,
        }}
      />
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}
