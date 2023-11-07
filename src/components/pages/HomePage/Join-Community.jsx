import React, { useEffect, useState } from 'react';
import ContainLayout from '@/components/layout/ContainerLayout';
import Image from 'next/image';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

const JoinCommunity = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <div className='bg-[#f2f1f1bf] py-16'>
      <ContainLayout>
        <div className='grid items-center md:grid-cols-2'>
          <div
            className='grid items-center md:grid-cols-2'
            data-aos='fade-right'
            data-aos-offset='100' // Adjust the offset as needed
          >
            <h2 className='text-bold py-4 text-[20px] font-bold lg:text-[35px] '>
              Become A{' '}
              <span className='text-green-shad2'> Volunteer Today</span>
            </h2>
            <p className='text-justify text-[17px] leading-[150%]'>
              The best way to find yourself is to lose yourself in the service
              of others. These are wise words by revered Mahatma Gandhi.{' '}
            </p>

            <p className='py-3 text-justify text-[16px] leading-[150%] lg:text-[17px]'>
              Are you an established entrepreneur, teacher, or upcoming
              professional? Do you see the beautiful work we do at RIF, and do
              you believe you can make a firm contribution with your efforts? We
              encourage you to join us.
            </p>

            <button className='rounded-md bg-green-shad1 px-6 py-3 font-bold text-white shadow-md hover:bg-white hover:text-black'>
              <Link href='/contact-us'>Become A Volunteer</Link>
            </button>
          </div>
          <div className='mt-5 grid items-center gap-6 md:mt-0 md:grid-cols-1 lg:mt-4'>
            <div data-aos='fade-left'>
              <Image
                src='/bill-wegener-7MD4DR9jbP0-unsplash.jpg'
                className='rounded-md '
                alt='eop'
                width='500'
                height='500'
              />
            </div>
          </div>
        </div>
      </ContainLayout>
    </div>
  );
};

export default JoinCommunity;
