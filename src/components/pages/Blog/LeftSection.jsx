import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const LeftSection = ({ categories, recentPosts }) => {
  return (
    <div className='col-xl-4 col-lg-4'>
      {/* <div className='causes-details-card event-details-card'>
        <div className='blog-details-left-form'>
          <input type='search' name='search' placeholder='Search' />
          <i className='flaticon-search-interface-symbol'></i>
        </div>
      </div> */}

      <div className='causes-details-card'>
        <div className='causes-details-title'>
          <h3>Categories</h3>
        </div>
        <div className='causes-categories'>
          <ul>
            {categories?.map((category) => (
              <li key={category.id}>
                <a href={`/blog/${category?.uid}`}>
                  <i className='flaticon-angle-right'></i>
                  {category.data.category_title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className='causes-details-card'>
        <div className='causes-details-title'>
          <h3>Related Blog</h3>
        </div>
        <div className='causes-categories blog-recent-categories'>
          {recentPosts?.map((post) => (
            <RecentPost
              key={post?.id}
              image={post?.data.featured_image.url}
              date={post?.first_publication_date}
              title={post?.data?.title}
              alt={post?.data.featured_image.alt}
              link={`/blog/${post?.data?.category?.slug}
                                /${post?.uid}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const RecentPost = ({ image, alt, title, date, link }) => {
  return (
    <div className='blog-recent'>
      <div
        className=' relative block h-[90px] w-[90px]
             flex-shrink-0 overflow-hidden rounded-full bg-gray-300 '
      >
        <Image fill src={image} alt={alt} />
      </div>
      <div className='blog-recent-info'>
        <Link href={link || '#'}>{title}</Link>
        <p>{moment(date).format('MMMM DD, YYYY')}</p>
      </div>
    </div>
  );
};
export default LeftSection;
