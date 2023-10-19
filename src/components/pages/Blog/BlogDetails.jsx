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
          title:blog?.data?.title,
          description:blog?.data?.short_description,
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
        type="BlogPosting"
        images={[blog?.data.featured_image.url]}
      />

      <section className="bg-gray-100  py-10">
        <div className="container mx-auto">
          <div className="flex flex-wrap-reverse">

            <div className="w-full  p-4">
              <div className="bg-white grid md:grid-cols-2 gap-6  rounded-lg shadow-lg p-6">
                <div className="mb-6">
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold text-green-shad2">{blog?.data?.title}</h3>
                </div>
            <LeftSection categories={categories} recentPosts={recentPosts} />

                <div className="text-center mt-4">
                    <a href="events.html" className="btn-1">
                      {blog?.first_publication_date &&
                        moment(blog?.first_publication_date).format('DD MMM YYYY')}
                      <span></span>
                    </a>
                  </div>
                  <img
                    src={blog?.data.featured_image.url}
                    alt={blog?.data.featured_image.alt}
                    className="w-full h-fill rounded-lg"
                  />
              
                </div>

            <div>
            

                <div className="prose">
                  <RichText field={blog?.data.content} />
                </div>
            </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
