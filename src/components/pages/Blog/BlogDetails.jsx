import React from 'react';
import LeftSection from './LeftSection';
import moment from 'moment';
import { PrismicRichText } from '@prismicio/react';
import RichText from '../../RichText';
import { NextSeo, ArticleJsonLd } from 'next-seo';
import ContainLayout from '@/components/layout/ContainerLayout';
import HeroBanner2 from '@/components/layout/HeroLayout';
import SoftBlogDetail from './SoftBlogDetail';

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

      <HeroBanner2 title='Blog Details' />
<ContainLayout>

    <>


      <section className='grid grid-cols-1 py-12 md:grid-cols-3 gap-6 causes causes-page'>
        <div className='md:col-span-2'>
          <div >
            <div

            >

              <div >
                <img
                  src={blog?.data.featured_image.url}
                  alt={blog?.data.featured_image.alt}
                />
              <div className="flex py-6 items-center gap-6">
              <div className='header-link-btn bg-green-shad2 px-6 py-9 text-white font-bold font-museo'>
                  <a href='events.html' className='btn-1'>
                    {blog?.first_publication_date &&
                      moment(blog?.first_publication_date).format(
                        'DD MMM YYYY'
                      )}
                    <span></span>
                  </a>
                </div>
                <div className='md:col-span-2'>
          <div className='main-causes-content font-bold text-green-shad1'>
            <div className='causes-details-title'>
              <h3>{blog?.data?.title}</h3>
            </div>


          </div>
        </div>
              </div>
              <RichText field={blog?.data.content} />
              </div>
            </div>
          </div>
        </div>

        <div className='md:col-span-1 '>
          {
      recentPosts?.map((post,lop)=>(
        <div key={post?.id}>
       <SoftBlogDetail
        title={post?.data?.title}
       link={post.data.href}

       />
        </div>
      ))
    }
          <LeftSection categories={categories} recentPosts={recentPosts} />

        </div>


      </section>

    </>



</ContainLayout>
    </>
  );
};

export default BlogDetails;
