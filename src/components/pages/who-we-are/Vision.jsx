import Image from 'next/image';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ContainLayout from '@/components/layout/ContainerLayout';
import Link from 'next/link';
const Vision = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <ContainLayout>
      <div className='grid items-center gap-10 py-12 md:grid-cols-2 '>
        <div data-aos='flip-up'>
          <div>
            <p className='font-yeseva text-[18px] lg:text-[20px]'> Vision</p>
            <h3 className='text-[20px] font-bold lg:text-[40px]'>
              Vision <span className='text-green-shad2   '>Statement</span>
            </h3>
            <div className='mt-6 md:max-w-[500px]'>
              <p className='text-[16px]'>
                To become West Africa&apos;s model foundation for indigenous
                mindset re-engineering, education, and skilling via deliberate
                collaborative investment in human capacity/resource development.
              </p>
              <button className='mt-6 w-fit rounded-lg bg-[rgb(0,104,55)]  px-12 py-3 font-bold text-white'>
                <Link href='/past-project'>Learn more</Link>
              </button>
            </div>
          </div>
        </div>
        <div data-aos='fade-left'>
          <Image
            src='/assets/iwere-homepage.jpg'
            className='rounded-md'
            height='1200'
            width='1200'
            alt='ed'
          />
        </div>
      </div>
    </ContainLayout>
  );
};

export default Vision;
