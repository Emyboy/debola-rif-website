import React from 'react';
import EachBlog from './EachBlog';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ContainLayout from '@/components/layout/ContainerLayout';
import HeroBanner2 from '@/components/layout/HeroLayout';

const Blog = ({ posts, totalPages }) => {
  const router = useRouter();
  const currentPage = Number(router.query.page) || 1;
  const pathname = router.asPath.split('/page')[0];

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );
  return (
   <div>
     <HeroBanner2 title='Blog' />

<ContainLayout> 
  <div className='py-16'>
  <div className='container'>
    <div className='md:grid-cols-3  gap-6 grid '>
      {posts.map((post) => (
        <EachBlog
          key={post.id}
          img={post?.data?.featured_image?.url}
          alt={post?.data?.featured_image?.alt}
          writer={'Admin'}
          title={post?.data?.title}
          content={post.data.short_description}
          createdDate={post?.first_publication_date}
          link={`/blog/${post.data.category.slug}/${post.uid}`}
        />
      ))}
      <div className='col-xl-12'>
        <div className='paigenition'>
          <ul>
            {totalPages > 1 &&
              pageNumbers.map((page) => (
                <li key={`page_${page}`}>
                  <Link href={`${pathname}/page/${page}`}>{page}</Link>
                </li>
              ))}
            {currentPage < totalPages && (
              <li>
                <Link href={`/blog/page/${currentPage + 1}`}>
                  <i className='flaticon-right-arrow-1'></i>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
</ContainLayout>
   </div>
  );
};

export default Blog;
