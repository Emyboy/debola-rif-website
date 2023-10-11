// import Layout from '@/components/layout/Layout';
// import ProjectDetail from '@/components/pages/PastProjects/ProjectDetail';
import { createClient } from '../../prismicio';
import React from 'react';
import Layout from '../../components/layout/Layout';
import ProjectDetail from '../../components/pages/PastProjects/ProjectDetail';
import { useRouter } from 'next/router';
import Head from 'next/head';
import defaultMetadata from '@/METADATA';
import { RichText } from 'prismic-dom';
import { NextSeo } from 'next-seo';

const ProjectDetails = ({ details }) => {
  const router = useRouter();
  // const plainText = RichText?.asText(details?.data.description);

  return (
    <Layout>
      {router.isFallback ? (
        <></>
      ) : (
        <>
          <NextSeo
            title={`${details?.data?.title} | Royal Iwere Foundation`}
            // description={details?.data?.description || plainText.slice(0, 160)}
            twitter={{
              cardType: 'summary_large_image',
            }}
            openGraph={{
              type: 'website',
              locale: 'en_IE',

              url: `https://rif.ng/past-project/${details?.uid}`,
              siteName: 'RIF',
              images: [
                {
                  url: details.data?.featured_image?.url,
                },
              ],
              title: `${details?.data?.title} | Royal Iwere Foundation`,
            }}
            canonical={`https://rif.ng/past-project/${details?.uid}`}
          />
          <div className='container'>
            <ProjectDetail details={details} />
          </div>
        </>
      )}
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const client = createClient();
  const project = await client.getByType('past_project');

  const paths = project.results.map((project) => ({
    params: {
      slug: project.uid,
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

  const details = await client.getByUID('past_project', slug);

  return {
    props: {
      details,
    },
    revalidate: 60,
  };
};

export default ProjectDetails;
