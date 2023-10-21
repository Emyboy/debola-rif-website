// import Layout from '/components/layout/Layout';
import React from 'react';
import Layout from '../../components/layout/Layout';
import { createClient } from '../../prismicio';
import * as prismic from '@prismicio/client';
import Blog from '../../components/pages/Blog';
import { useRouter } from 'next/router';
import Head from 'next/head';
import defaultMetadata from '@/METADATA';

const CategoryPage = ({ blogPosts, totalPages }) => {
  const router = useRouter();
  return (
    <Layout>
      <Head>
        <title>{defaultMetadata.title} | Blog</title>
      </Head>
      {router.isFallback ? (
        <></>
      ) : (
        <Blog posts={blogPosts}  totalPages={totalPages} />
      )}
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const client = createClient();

  const categories = await client.getByType('blog_category', {
    orderings: {
      field: 'document.uid',
      direction: 'desc',
    },
  });

  const paths = categories.results.map((category) => ({
    params: { category: category.uid },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ previewData, params }) => {
  const categorySlug = params.category;

  const client = createClient({ previewData });

  const getCategoryBySlug = await client.getByUID(
    'blog_category',
    categorySlug
  );

  const categoryId = getCategoryBySlug.id;

  const blogPosts = await client.getByType('blog', {
    filters: [prismic.filter.at('my.blog.category', categoryId)],
    pageSize: 9,
    page: 1,
    orderings: {
      field: 'document.first_publication_date',
      direction: 'desc',
    },
  });

  return {
    props: {
      blogPosts: blogPosts.results,
      totalPages: blogPosts.total_pages,
    },
  };
};

export default CategoryPage;
