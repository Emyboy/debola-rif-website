import * as prismic from '@prismicio/client';

export const fetchBlogPosts = async (client, pageSize, currentPage) => {
  const blogposts = await client.getByType('blog', {
    pageSize: pageSize || 9,
    orderings: {
      field: 'document.first_publication_date',
      direction: 'desc',
    },
    graphQuery: `{
        blog{
            title
            featured_image
            short_description
            category
        }
    }`,
    page: currentPage || 1,
  });

  return {
    posts: blogposts.results,
    totalPages: blogposts.total_pages,
  };
};

export const fetchBlogPostsByCategory = async (
  client,
  pageSize,
  currentPage,
  categorySlug
) => {
  const getCategoryBySlug = await client.getByUID(
    'blog_category',
    categorySlug
  );

  const categoryId = getCategoryBySlug.id;

  const blogposts = await client.getByType('blog', {
    pageSize: pageSize || 9,
    orderings: {
      field: 'document.first_publication_date',
      direction: 'desc',
    },
    filters: [prismic.filter.at('my.blog.category', categoryId)],
    graphQuery: `{
        blog{
            title
            featured_image
            short_description
            category
        }
    }`,
    page: currentPage || 1,
  });

  return {
    posts: blogposts.results,
    totalPages: blogposts.total_pages,
  };
};
