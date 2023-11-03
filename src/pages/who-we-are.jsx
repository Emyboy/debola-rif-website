// import Layout from "@/components/layout/Layout";
import WhoWeArePage from '../components/pages/who-we-are';
import React from 'react';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import defaultMetadata from '@/METADATA';
import { createClient } from '@/prismicio';

const WhoWeAre = ({ featured_in }) => {
  return (
    <Layout>
      <Head>
        <title>{defaultMetadata.title} | Who we are</title>
      </Head>
      <WhoWeArePage featured_in={featured_in} />
    </Layout>
  );
};

export default WhoWeAre;
export const getStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData });

  const featured_in = await client.getByType('featured_in');

  return {
    props: {
      featured_in: featured_in.results,
    },
  };
};
