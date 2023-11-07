import moment from 'moment';
import Image from 'next/image';
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
const { default: Link } = require('next/link');

const EachBlog = ({ createdDate, title, content, link, img, alt, writer }) => {
  useEffect(() => {
    AOS.init({
      once: true,
    }); // Initialize AOS
  }, []);

  return (
    <div
      data-aos='zoom-in'
      className='overflow-hidden rounded-lg bg-white shadow-lg'
    >
      <Link href={link || '#'}>
        <Image
          src={img}
          alt={alt}
          width='500'
          height='500'
          className='h-48 w-full object-cover'
        />
      </Link>
      <div className='p-6'>
        <div className='mb-4'>
          <Link href={link || '#'}>
            <h2 className='text-xl font-semibold text-gray-800 hover:text-green-shad2'>
              {title}
            </h2>
          </Link>
        </div>
        <p className='mb-4 text-sm text-gray-600'>{content}</p>
        <div className='flex items-center'>
          <Link href={link || '#'}>
            <span className=' hover:text-green-shad2 hover:underline'>
              Read more
            </span>
          </Link>
          <span className='ml-auto text-gray-400'>
            {moment(createdDate).format('MMMM DD, YYYY')}
          </span>
        </div>
      </div>
    </div>
  );
};

export default EachBlog;
