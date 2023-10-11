import React from 'react';
import EachProject from './EachProject';
import { data } from 'autoprefixer';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Main = ({ projects, totalPages }) => {
  const router = useRouter();
  const currentPage = Number(router.query.page) || 1;
  const pathname = router.asPath.split('/page')[0];

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );
  return (
    <div className='blog events event-page'>
      <div className='container'>
        <div className='  items-stretch   '>
          {projects.map((project) => (
            <EachProject
              link={`/past-project/${project.uid}`}
              location={project?.data?.location}
              img={project?.data?.featured_image?.url}
              date={project?.data?.project_date}
              title={project?.data?.title}
            />
          ))}

          <div className='col-xl-12'>
            <div className='paigenition'>
              <ul>
                {pageNumbers.map((page) => (
                  <li key={`page_${page}`}>
                    <Link href={`${pathname}/page/${page}`}>{page}</Link>
                  </li>
                ))}
                {currentPage < totalPages && (
                  <li>
                    <Link href={`${pathname}/page/${currentPage + 1}`}>
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
  );
};

export default Main;
