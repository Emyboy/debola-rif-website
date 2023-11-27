import ContainLayout from '@/components/layout/ContainerLayout';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FeatureIn = ({ featured_in }) => {
  return (
    <ContainLayout>
      <section className=' px-5  py-12'>
        <div className='container relative mx-auto '>
          <div className='mx-auto flex flex-col '>
            <h3 className='text-[20px] font-bold lg:text-[40px]'>
              {' '}
              <span className='text-green-shad2   '>Featured in </span>
            </h3>
          </div>
          <div className='hidden w-full flex-wrap items-center gap-x-8 gap-y-4 overflow-hidden py-8 lg:flex lg:justify-between lg:gap-x-0 '>
            {featured_in?.map((feature) => (
              <FeatureCard
                key={feature.id}
                image={feature?.data?.logo?.url}
                link={feature?.data?.link}
              />
            ))}
          </div>
        </div>
      </section>
    </ContainLayout>
  );
};

const FeatureCard = ({ image, link, alt }) => {
  return (
    <Link href={link} target='_blank' className='relative    '>
      <div className='group relative h-[40px] max-w-[75px] lg:max-w-[120px]'>
        <Image
          width={50}
          height={50}
          src={image}
          alt='icons'
          className=' h-full w-fit object-contain grayscale-[100] transition-all duration-500 ease-out group-hover:grayscale-0'
        />
      </div>
    </Link>
  );
};

export default FeatureIn;
