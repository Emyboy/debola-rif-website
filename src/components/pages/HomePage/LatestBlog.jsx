import Link from 'next/link';
import EachBlog from '../Blog/EachBlog';
import ContainLayout from '@/components/layout/ContainerLayout';

const LatestBlog = ({ posts }) => {
  return (
<ContainLayout>
<div className='py-16'>
<div className='flex flex-col py-6 justify-center items-center'>
<h3 className='text-[40px] font-bold'>WHAT'S <span className='text-green-shad2   '>HAPPENING</span></h3>
              <h3 className='text-center text-[20px]'>
                The Team at RIF is constantly coming up with helpful <br /> resources
                from our various programs. Stay glued for updates!
              </h3>
</div>
      <div className='grid-cols-3 gap-4 grid' >
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
