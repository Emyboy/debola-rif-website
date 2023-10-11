// import Layout from '@/components/layout/Layout';
import Main from '../../components/pages/PastProjects/Main';
import { createClient } from '../../prismicio';
import React from 'react';
import Layout from '../../components/layout/Layout';
import Head from 'next/head';
import defaultMetadata from '@/METADATA';

const index = ({ projects, totalPages }) => {
  return (
    <Layout>
      <Head>
        <title>{defaultMetadata.title} | Past Projects</title>
      </Head>
      <Main projects={projects} totalPages={totalPages} />
    </Layout>
  );
};

export const getStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData });

  const projects = await client.getByType('past_project', {
    pageSize: 9,
    orderings: {
      field: 'document.first_publication_date',
      direction: 'desc',
    },
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
export default index;
