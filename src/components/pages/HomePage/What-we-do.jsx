import ContainerLayout from '@/components/layout/ContainerLayout';
import React from 'react';
import Image from 'next/image';
import ReuseableCard from '@/components/ReuseableCard';

const Whatwedo = () => {
  return (
    <ContainerLayout className={'py-12'}>
      <div className='mx-auto flex flex-col items-center justify-center'>
        <h3 className='text-[40px] font-bold'>
          WHAT WE <span className='text-green-shad2   '>DO</span>
        </h3>
        <p className='text-center text-[18px]'>
          We are primarily focused on areas that border the following:
        </p>
      </div>
      <div className='mx-auto grid place-items-center gap-6 py-10 md:grid-cols-4'>
        <ReuseableCard
          imageSrc='/raise-hand.png'
          imageAlt='de'
          title='Combating militancy to promote positive youth engagement'
        />
        <ReuseableCard
          imageSrc='/assets/mortarboard.png'
          imageAlt='de'
          title='Job Creation'
        />
        <ReuseableCard
          imageSrc='/assets/children.png'
          imageAlt='de'
          title='Early childhood development'
        />
        <ReuseableCard
          imageSrc='/assets/salary.png'
          imageAlt='de'
          title='Enabling platforms for entrepreneurs'
        />
      </div>
    </ContainerLayout>
  );
};

export default Whatwedo;
