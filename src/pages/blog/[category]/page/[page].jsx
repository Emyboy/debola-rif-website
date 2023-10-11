import React from 'react';
import Layout from '../../../../components/layout/Layout';
import { useRouter } from 'next/router';
import { createClient } from '@/prismicio';
import * as prismic from '@prismicio/client';
import Blog from '@/components/pages/Blog';
import { fetchBlogPostsByCategory } from '@/lib/queryHelper';

const CategoryPages = ({ blogPosts, totalPages }) => {
  const router = useRouter();
  return (
    <Layout>
      {router.isFallback ? (
        <></>
      ) : (
        <Blog posts={blogPosts} totalPages={totalPages} />
      )}
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const client = createClient();

  const paths = [];

  const categories = await client.getByType('blog_category', {
    orderings: {
      field: 'document.ui',
      direction: 'desc',
    },
  });

  for (const category of categories.results) {
    const categoryId = category.id;
    const blog = await client.getByType('blog', {
      filters: [prismic.filter.at(`my.blog.category`, categoryId)],
      pageSize: 9,
      orderings: {
        field: 'document.first_publication_date',
        direction: 'desc',
      },
    });

    for (let page = 1; page <= blog.total_pages; page++) {
      paths.push({
        params: {
          category: category.uid,
          page: page.toString(),
        },
      });
    }

    return {
      paths,
      fallback: false,
    };
  }
};

export const getStaticProps = async ({ previewData, params }) => {
  const { category: categorySlug, page } = params;
  const client = createClient({ previewData });

  const { totalPages, posts } = await fetchBlogPostsByCategory(
    client,
    9,
    page,
    categorySlug
  );

  return {
    props: {
      blogPosts: posts,
      totalPages: totalPages,
    },
  };
};
export default CategoryPages;
