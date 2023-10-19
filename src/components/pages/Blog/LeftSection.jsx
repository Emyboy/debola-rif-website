import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const LeftSection = ({ categories, recentPosts }) => {
  const [activeTab, setActiveTab] = useState('categories');

  return (
    <div className='col-xl-4 col-lg-4'>
      <div className='causes-details-card bg-white p-4 rounded-lg shadow-lg'>
        <div className='causes-tabs mb-6'>
          <button
            onClick={() => setActiveTab('categories')}
            className={`tab-btn ${
              activeTab === 'categories' ? 'active' : ''
            }`}
          >
            Categories
          </button>
          <button
            onClick={() => setActiveTab('related')}
            className={`tab-btn ${
              activeTab === 'related' ? 'active' : ''
            }`}
          >
            Related Blog
          </button>
        </div>
        <div className='causes-content'>
          {activeTab === 'categories' ? (
            <ul className='causes-categories'>
              {categories?.map((category) => (
                <li key={category.id}>
                  <a href={`/blog/${category?.uid}`}>
                    <i className='flaticon-angle-right'></i>
                    {category.data.category_title}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <div className='causes-categories grid grid-cols-2  blog-recent-categories'>
              {recentPosts?.map((post) => (
                <RecentPost
                  key={post?.id}
                  image={post?.data.featured_image.url}
                  date={post?.first_publication_date}
                  title={post?.data?.title}
                  alt={post?.data.featured_image.alt}
                  link={`/blog/${post?.data?.category?.slug}/${post?.uid}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const RecentPost = ({ image, alt, title, date, link }) => {
  return (
    <div className='blog-recent mb-4 flex items-center'>
      <div className='relative h-16 w-16 rounded-full overflow-hidden'>
        <Image fill src={image} alt={alt} width={64} height={64} />
      </div>
      <div className='ml-4'>
        <Link href={link || '#'} className='text-green-shad2 font-semibold'>
          {title}
        </Link>
        <p className='text-gray-600 text-sm'>
          {moment(date).format('MMMM DD, YYYY')}
        </p>
      </div>
    </div>
  );
};

export default LeftSection;
