import ContainLayout from '@/components/layout/ContainerLayout';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Mission = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <ContainLayout className={'mx-0 w-full  bg-[#f2f1f1bf] py-16'}>
      <div className='grid items-center gap-10  py-12 md:grid-cols-2'>
        <div data-aos='flip-up'>
          <Image
            src='/assets/iwere-banner.jpeg'
            className='rounded-md'
            height='1200'
            width='1200'
            alt='ed'
          />
        </div>
        <div data-aos='fade-left'>
          <div>
            <p className='font-yeseva text-[18px] lg:text-[20px]'> Mission</p>
            <h3 className='text-[20px] font-bold lg:text-[40px]'>
              Mission <span className='t  text-green-shad2 '>Statement</span>
            </h3>
            <div className='mt-6 md:max-w-[500px] '>
              <p className='text-[16px]'>
                To provide physical, mental, and entrepreneurial support to
                indigenes of the Warri Kingdom, thoroughly equipping them with
                viable means to thrive in society, and ultimately changing
                prevailing narratives within the region.
              </p>
              <button className='my-4 rounded-md bg-green-shad1 px-6 py-3 font-bold text-white  shadow-md hover:bg-white hover:text-black'>
                <Link href='/contact-us'>Get in Touch</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </ContainLayout>
  );
};

export default Mission;
