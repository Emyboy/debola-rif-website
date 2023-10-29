import { Link } from 'lucide-react';
import { useRouter } from 'next/router';
import EachReport from './EachReport';
import HeroBanner2 from '@/components/layout/HeroLayout';
import ContainLayout from '@/components/layout/ContainerLayout';

const Report = ({ posts, totalPages }) => {
  const router = useRouter();
  const currentPage = Number(router.query.page) || 1;
  const pathname = router.asPath.split('/page')[0];

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <>
      <HeroBanner2
        backgroundImage={'/assets/images/home/rif-woman-2.jpeg'}
        title='Impact Report'
      />
      <ContainLayout>
        <div className='my-6'>
          <div className='container mx-auto'>
            <div className='mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
              {posts.map((post) => (
                <div
                  key={post.id}
                  className='rounded-lg bg-white p-4 shadow-md transition duration-300 hover:shadow-xl'
                >
                  <img
                    src={post?.data?.featured_image?.url}
                    alt={post?.data?.featured_image?.alt}
                    className='h-48 w-full rounded object-cover'
                  />
                  <h3 className='mt-4 text-xl font-semibold'>
                    {post?.data?.title}
                  </h3>
                  <p className='text-gray-600'>{post.data.short_description}</p>
                  <div className='mt-4'>
                    <a
                      href={post?.data?.report?.url}
                      className='text-red-400 underline'
                    >
                      {' '}
                      Read More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='container mx-auto mt-6'>
            <div className='flex justify-center'>
              <ul className='flex space-x-2'>
                {totalPages > 1 &&
                  pageNumbers.map((page) => (
                    <li key={`page_${page}`}>
                      <Link
                        href={`${pathname}/page/${page}`}
                        className='text-[#F65024]'
                      >
                        {page}
                      </Link>
                    </li>
                  ))}
                {currentPage < totalPages && (
                  <li>
                    <Link
                      href={`/impact-report/page/${currentPage + 1}`}
                      className='text-[#F65024]'
                    >
                      <i className='flaticon-right-arrow-1'></i>
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </ContainLayout>
    </>
  );
};

export default Report;
