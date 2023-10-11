import Link from 'next/link';
import React from 'react';

const Parners = () => {
  return (
    <div className='sponsor'>
      <div className='container'>
        <h2
          className='text-center text-[32px]
                 leading-[49px] lg:text-[62px] lg:leading-[80px]'
        >
          Sponsors
        </h2>
        <p className='my-7 text-center'>
          In spite of the tremendous progress we are making daily, we choose to
          lean on the powerful words of Helen Keller: <br />
          <q>Alone, we can do so little; together, we can.</q>
        </p>

        {/* <div className="my-20 ">
                    <h2></h2>
                    <div className="row justify-center gap-8 items-center">
                    <Sponsor />
                    <Sponsor />
                    <Sponsor />
                </div>
                </div> */}

        <div className='mt-8 flex flex-col items-center gap-7'>
          <h4>What to become a sponsor?</h4>
          <p className='text-center'>
            Click the button below to contact us, and a designated RIF
            representative will speak with you immediately.
          </p>
          <div className='header-link-btn'>
            <Link href='mailto:contact@rif.ng' className='btn-1'>
              Become A Sponsor
              <span></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parners;

const Sponsor = ({ img, alt }) => {
  return (
    <div
      className='owl-item cloned'
      style={{ width: ' 156px', marginRight: '24px' }}
    >
      <div className='sponsore-logo'>
        <img src='assets/images/brand/brand-03.png' alt='logo' />
      </div>
    </div>
  );
};
