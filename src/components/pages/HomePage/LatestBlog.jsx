import Link from 'next/link';
import EachBlog from '../Blog/EachBlog';

const LatestBlog = ({ posts }) => {
  return (
    <section className='blog bg-white md:py-16'>
      <div className='blank'></div>
      <div className='container '>
        <div className='row items-stretch '>
          <div className='col-xl-12'>
            <div className='align-title'>
              <h5>Latest Blog</h5>
              <h3
                style={{
                  fontSize: ' 1.2rem',
                  lineHeight: '20px',
                  padding:'10px 10px'
                }}
              >
                The Team at RIF is constantly coming up with helpful <br /> resources
                from our various programs. Stay glued for updates!
              </h3>
            </div>
          </div>
          {posts?.map((post) => (
            <EachBlog
              key={post?.id}
              img={post?.data?.featured_image?.url}
              alt={post?.data?.featured_image?.alt}
              writer={'Admin'}
              title={post?.data?.title}
              content={post?.data.short_description}
              createdDate={'20 Feb 2022'}
              link={`/blog/${post?.data?.category?.slug}/${post.uid}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;
