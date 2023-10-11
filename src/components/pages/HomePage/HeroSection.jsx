import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HeroSection = () => {
  return (
    <div className='slider_area'>
      <div
        style={{
          background: "url('/assets/images/home/rif-woman.jpeg') no-repeat",
          backgroundPosition: 'center',
        }}
        className='single_slider  d-flex align-items-center slider_bg_1 overlay2'
      >
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9'>
              <div className='slider_text '>
                {/* <span>Get Started Today.</span> */}
                <h3>RIF- ROYAL IWERE FOUNDATION </h3>
                <p className='font-museo'>
                  An Iwere Nation's Human Capital Development Programme
                </p>
                <Link href='/who-we-are' className='boxed-btn3'>
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
