import Image from 'next/image';
import { Inter } from 'next/font/google';
// import Layout from '@/components/layout/Layout';
import HomePage from '@/components/pages/HomePage';
import { createClient } from '@/prismicio';
import Layout from '../components/layout/Layout';
import { fetchBlogPosts } from '@/lib/queryHelper';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ blogs }) {
  return (
    <Layout>
      <HomePage posts={blogs} />
    </Layout>
  );
}

export const getStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData });

  const { posts, totalPages } = await fetchBlogPosts(client, 6);

  return {
    props: {
      blogs: posts,
    },
    revalidate: 60,
  };
};
