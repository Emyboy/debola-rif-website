// import Layout from "@/components/layout/Layout";
import BlogDetails from '../../../components/pages/Blog/BlogDetails';
import { createClient } from '../../../prismicio';
import React from 'react';
import * as prismic from '@prismicio/client';
import Layout from '../../../components/layout/Layout';
import defaultMetadata from '@/METADATA';
import Head from 'next/head';
import { RichText } from 'prismic-dom';
import { NextSeo } from 'next-seo';

const Details = ({ blog, categories, relatedPosts }) => {
  // const plainText = blog?.data.content && RichText?.asText(blog?.data.content);
  return (
    <Layout>
      <NextSeo
        title={`${blog?.data?.title} | Royal Iwere Foundation`}
        // description={blog?.data?.description || plainText.slice(0, 160)}
        twitter={{
          cardType: 'summary_large_image',
        }}
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          // description: blog?.data?.description || plainText.slice(0, 160),
          url: `https://rif.ng/past-project/${blog?.uid}`,
          siteName: 'RIF',
          images: [
            {
              url: blog?.data?.featured_image?.url,
            },
          ],
          title: `${blog?.data?.title} | Royal Iwere Foundation`,
        }}
        canonical={`https://rif.ng/past-project/${blog?.uid}`}
      />
      <BlogDetails
        blog={blog}
        categories={categories}
        recentPosts={relatedPosts}
      />
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const client = createClient();
  const blog = await client.getByType('blog');

  const paths = blog.results.map((post) => ({
    params: {
      category: post.data.category.slug,
      slug: post.uid,
    },
  }));
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ previewData, params }) => {
  const { slug } = params;

  const client = createClient({ previewData });

  const categories = await client.getByType('blog_category', {
    orderings: {
      field: 'document.uid',
      direction: 'desc',
    },
  });

  const publication = await client.getByUID('blog', slug);
  const categoryId = publication?.data?.category?.id;
  const postId = publication?.id;
  const relatedPosts = await client.getByType('blog', {
    filters: [
      prismic.filter.at(`my.blog.category`, categoryId),
      prismic.filter.not('document.id', postId),
    ],
    pageSize: 3,
    orderings: {
      field: 'document.first_publication_date',
      direction: 'desc',
    },
  });

  return {
    props: {
      blog: publication,
      categories: categories.results,
      relatedPosts: relatedPosts?.results,
    },
    revalidate: 60,
  };
};

export default Details;
