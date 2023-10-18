import moment from 'moment';
import Image from 'next/image';

const { default: Link } = require('next/link');

const EachBlog = ({ createdDate, title, content, link, img, alt, writer }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <Link href={link || '#'}>
        <Image
          src={img}
          alt={alt}
          width='500'
          height='500'
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-6">
        <div className="mb-4">
          <Link href={link || '#'}>
            <h2 className="text-xl font-semibold text-gray-800 hover:text-green-shad2">
              {title}
            </h2>
          </Link>
        </div>
        <p className="text-gray-600 text-sm mb-4">
          {content}
        </p>
        <div className="flex items-center">
          <Link href={link || '#'}>
            <span className=" hover:text-green-shad2 hover:underline">Read more</span>
          </Link>
          <span className="text-gray-400 ml-auto">
            {moment(createdDate).format('MMMM DD, YYYY')}
          </span>
        </div>
      </div>
    </div>
  );
};

export default EachBlog;
