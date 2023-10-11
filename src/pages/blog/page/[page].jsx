// import Layout from "@/components/layout/Layout";
import Blog from '../../../components/pages/Blog';
import { createClient } from '../../../prismicio';
// import BlogPage from "@/components/pages/Blog";
import React from 'react';
import Layout from '../../../components/layout/Layout';
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

export const getStaticPaths = async () => {
  const client = createClient();
  const paths = [];
  const publication = await client.getByType('blog', {
    orderings: {
      field: 'document.first_publication_date',
      direction: 'desc',
    },
  });

  for (let page = 1; page <= publication.total_pages; page++) {
    paths.push({
      params: {
        page: page.toString(),
      },
    });
  }

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ previewData, params }) => {
  const page = params.page;
  const client = createClient({ previewData });

  const { posts, totalPages } = await fetchBlogPosts(client, 9, page);

  if (!(posts.length > 0)) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      blogs: posts,
      totalPages: totalPages,
    },
    revalidate: 60,
  };
};
export default index;
