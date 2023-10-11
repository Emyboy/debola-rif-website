import moment from 'moment';
import Image from 'next/image';

const { default: Link } = require('next/link');

const EachReport = ({ createdDate, title, content, link, img, alt }) => {
  return (
    <div className='col-xl-4 col-lg-4 mt-4 min-h-full'>
      <div
        className='causes-card wow fadeInUp animated h-full w-full'
        data-wow-delay='600ms'
        data-wow-duration='1500ms'
        style={{
          visibility: ' visible',
          animationDuration: '1500ms',
          animationDelay: ' 600ms',
          animationName: 'fadeInUp',
        }}
      >
        <Link
          style={{
            height: '316px',
          }}
          target='_blank'
          href={link || '#'}
          className='causes-image
                 blog-image   relative block h-[316px] bg-gray-200'
        >
          <Image fill src={img} alt={alt} className='object-contain' />
        </Link>
        <div className='blog-contant'>
          <div className='header-link-btn'>
            <Link target='_blank' href={link || ''} className='btn-1'>
              {moment(createdDate).format('MMMM DD, YYYY')}
              <span></span>
            </Link>
          </div>
          <div className='comments'></div>
          <Link target='_blank' href={link || '#'} className='hover-content'>
            {title}
          </Link>
          <p>
            {content.split(' ').slice(0, 13).join(' ')}
            {content.split(' ').length > 13 && '...'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EachReport;
