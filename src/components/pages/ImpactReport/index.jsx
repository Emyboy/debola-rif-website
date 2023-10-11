import { Link } from 'lucide-react';
import { useRouter } from 'next/router';
import EachReport from './EachReport';

const Report = ({ posts, totalPages }) => {
  const router = useRouter();
  const currentPage = Number(router.query.page) || 1;
  const pathname = router.asPath.split('/page')[0];

  console.log(posts);

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );
  return (
    <>
      <section
        className='common-banner relative'
        style={{
          backgroundImage: "url('assets/iwere-banner.jpeg')",
        }}
      >
        <div className='absolute left-0 top-0 h-full w-full bg-[#1b1a1a44] backdrop-blur-sm'></div>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='common-banner-title'>
                <h3 style={{ color: '' }} className='text-[#F65024]'>
                  Impact Reports
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='blog home-three-blog main-blog'>
        <div className='container'>
          <div className='row gap-y-5'>
            {posts.map((post) => (
              <EachReport
                key={post.id}
                img={post?.data?.featured_image?.url}
                alt={post?.data?.featured_image?.alt}
                title={post?.data?.title}
                content={post.data.short_description}
                createdDate={post?.first_publication_date}
                link={post?.data?.report?.url}
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
                      <Link href={`/impact-report/page/${currentPage + 1}`}>
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
    </>
  );
};

export default Report;
