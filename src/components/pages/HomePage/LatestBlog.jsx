import Link from 'next/link';
import EachBlog from '../Blog/EachBlog';
import ContainLayout from '@/components/layout/ContainerLayout';

const LatestBlog = ({ posts }) => {
  return (
    <ContainLayout>
      <div className='py-16'>
        <div className='flex flex-col items-center justify-center py-6'>
          <h3 className='text-[35px]  font-bold md:text-[40px]'>
            WHAT'S <span className='text-green-shad2   '>HAPPENING</span>
          </h3>
          <h3 className=' text-[18px] md:text-center'>
            The team at RIF is constantly coming up with helpful <br />{' '}
            resources from our various programs. Stay glued for updates!
          </h3>
        </div>
        <div className='grid gap-4 md:grid-cols-3'>
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
    </ContainLayout>
  );
};

export default LatestBlog;
