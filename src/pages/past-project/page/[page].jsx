import Layout from '@/components/layout/Layout';
import Main from '@/components/pages/PastProjects/Main';
import { createClient } from '@/prismicio';
import React from 'react';

const PastProjectsPages = ({ totalPages, projects }) => {
  return (
    <Layout>
      <Main totalPages={totalPages} projects={projects} />
    </Layout>
  );
};

export default PastProjectsPages;

export const getStaticPaths = async () => {
  const client = createClient();
  const paths = [];
  const publication = await client.getByType('past_project', {
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
    fallback: false,
  };
};

export const getStaticProps = async ({ previewData, params }) => {
  const client = createClient({ previewData });
  const { page } = params;

  const projects = await client.getByType('past_project', {
    pageSize: 9,
    orderings: {
      field: 'document.first_publication_date',
      direction: 'desc',
    },
    page: page || 1,
    graphQuery: `{
      past_project{
        title
        location
        featured_image
        project_date
      }
    }`,
  });

  return {
    props: {
      projects: projects.results,
      totalPages: projects.total_pages,
    },
    revalidate: 60,
  };
};
