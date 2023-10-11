import Layout from '@/components/layout/Layout';
import Report from '@/components/pages/ImpactReport';
import { createClient } from '@/prismicio';
import React from 'react';

const index = ({ reports, totalPages }) => {
  return (
    <Layout>
      <Report posts={reports} totalPages={totalPages} />
    </Layout>
  );
};

export const getStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData });

  const reports = await client.getByType('impact_report', {
    pageSize: 9,
    orderings: {
      field: 'document.first_publication_date',
      direction: 'desc',
    },
  });

  return {
    props: {
      reports: reports.results,
      totalPages: reports.total_pages,
    },
  };
};

export default index;
