import React from 'react';
import LeftSection from './LeftSection';
import moment from 'moment';
import { PrismicRichText } from '@prismicio/react';
import RichText from '../../RichText';
import { NextSeo, ArticleJsonLd } from 'next-seo';

const BlogDetails = ({ blog, categories, recentPosts }) => {
  return (
    <>
      <NextSeo
        title={blog?.data?.title}
        description={blog?.data?.short_description}
        openGraph={{
          type: 'article',
          title: blog?.data?.title,
          description: blog?.data?.short_description,
          url: `https://rif.ng/blog/${blog?.data?.category?.slug}/${blog?.uid}`,
          images: [
            {
              url: blog?.data.featured_image.url,
              width: blog?.data?.featured_image?.dimensions?.width,
              height: blog?.data?.featured_image?.dimensions?.height,
            },
          ],
        }}
      />
      <ArticleJsonLd
        url={`https://rif.ng/blog/${blog?.data?.category?.slug}/${blog?.uid}`}
        title={blog?.data?.title}
        description={blog?.data?.short_description}
        type='BlogPosting'
        images={[blog?.data.featured_image.url]}
      />

      <section className='causes causes-page'>
        <div className='container'>
          <div className='row  flex-wrap-reverse'>
            <LeftSection categories={categories} recentPosts={recentPosts} />

            <div className='col-xl-8 col-lg-8'>
              <div className='causes-card'>
                <div
                  className='causes-image-container
                                cause-details-container'
                >
                  <div
                    className='causes-image-overlay wow animated'
                    style={{
                      visibility: 'visible',
                      animationName: 'panel',
                    }}
                  ></div>
                  <div className='causes-image cause-details-image'>
                    <img
                      src={blog?.data.featured_image.url}
                      alt={blog?.data.featured_image.alt}
                    />
                    <div className='header-link-btn'>
                      <a href='events.html' className='btn-1'>
                        {blog?.first_publication_date &&
                          moment(blog?.first_publication_date).format(
                            'DD MMM YYYY'
                          )}
                        <span></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className='main-causes-content'>
                <div className='causes-details-title'>
                  <h3>{blog?.data?.title}</h3>
                </div>

                <RichText field={blog?.data.content} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
