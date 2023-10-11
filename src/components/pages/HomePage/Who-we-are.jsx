import Image from 'next/image';
import React from 'react';

const WhoWeAre = () => {
  return (
    <div className='container mx-auto my-20 flex flex-wrap gap-8 bg-white px-[16] lg:flex-nowrap  lg:px-12'>
      <div
        style={{
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
        className='relative lg:h-[450px] lg:w-[50%]'
      >
        <Image
          src={'/assets/images/home/rif-woman-2.jpeg'}
          className='object-contain'
          fill
        />
      </div>
      <div className='activites_info lg:w-[50%]'>
        <div className='section_title text-center lg:text-left'>
          <h3>Who we are</h3>
        </div>
        <p className='para_1 font-museo'>
          RIF, an African non profit organisation founded in 2023, aims to
          assist the Warri Kingdom by effectively tackling obstacles and
          vulnerabilities that could hinder the state's continuous development
          and its capacity to compete internationally. RIF, an African non
          profit organisation founded in 2023, aims to assist the Warri Kingdom
          by effectively tackling obstacles and vulnerabilities that could
          hinder the state's continuous development and its capacity to compete
          internationally.
        </p>
        <blockquote className=' mt-3 rounded-[8px] border-b-[8px] border-b-primary-green-2 bg-green-200 p-2 font-museo lg:m-3 lg:mt-0'>
          "RIF is a restorative mission to re-engineer the mindsets of indigenes
          of Warri Kingdom to propel them for a more productive and fulfilling
          life, and in turn, be worthy examples for the next generation."
          <br />
          <br />
          <span className='font-bold'>Olori Atuwatse III</span>
        </blockquote>
        {/* <a href='#' data-scroll-nav='1' className='boxed-btn4'>
                Donate Now
              </a> */}
      </div>
    </div>
  );
};

export default WhoWeAre;
