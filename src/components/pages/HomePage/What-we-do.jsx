import ContainerLayout from '@/components/layout/ContainerLayout';
import React from 'react';
import Image from 'next/image';
import ReuseableCard from '@/components/ReuseableCard';

const Whatwedo = () => {
  return (
    <ContainerLayout>
            <div className='mx-auto flex flex-col justify-center items-center'>
      <h3 className='text-[40px] font-bold'>WHO WE <span className='text-green-shad2   '>DO</span></h3>
      <p className='text-[18px] text-center'>We Are Primarily Focused On Areas That Border On The Following;</p>
      </div>
      <div className='grid mx-auto py-10 place-items-center gap-6 md:grid-cols-4'>

<ReuseableCard 
       imageSrc='/raise-hand.png'
        imageAlt='de'
        title='Combating militancy to promote positive youth engagement' />
<ReuseableCard 
       imageSrc='/assets/mortarboard.png'
        imageAlt='de'
        title='Job Creation' />
<ReuseableCard 
       imageSrc='/assets/children.png'
        imageAlt='de'
        title='Early childhood development' />
<ReuseableCard 
       imageSrc='/assets/salary.png'
        imageAlt='de'
        title='Enabling platforms for entrepreneurs' />

      </div>
    </ContainerLayout>
  );
}

export default Whatwedo;
