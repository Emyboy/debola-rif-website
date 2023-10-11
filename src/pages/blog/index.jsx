// import Layout from "@/components/layout/Layout";
import Blog from '../../components/pages/Blog';
import { createClient } from '../../prismicio';
// import BlogPage from "@/components/pages/Blog";
import React from 'react';
import Layout from '../../components/layout/Layout';
import Head from 'next/head';
import defaultMetadata from '@/METADATA';
import { fetchBlogPosts } from '@/lib/queryHelper';

const index = ({ blogs, totalPages }) => {
  return (
    <Layout>
      <Head>
        <title>{defaultMetadata.title} | Blog</title>
      </Head>
      <Blog posts={blogs} totalPages={totalPages} />
    </Layout>
  );
};

export const getStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData });

  const { posts, totalPages } = await fetchBlogPosts(client);

  return {
    props: {
      blogs: posts,
      totalPages: totalPages,
    },
    revalidate: 60,
  };
};
export default index;
