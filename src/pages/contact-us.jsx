// import Layout from "@/components/layout/Layout";
import React from 'react';
import ContactPage from '../components/pages/Contact';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import defaultMetadata from '@/METADATA';

const Contact = () => {
  return (
    <Layout>
      <Head>
        <title>{defaultMetadata.title} | Contact Us</title>
      </Head>
      <ContactPage />
    </Layout>
  );
};

export default Contact;
 