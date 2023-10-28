import React from 'react';
import EachGoal from '../HomePage/EachGoal';
import ContainLayout from '@/components/layout/ContainerLayout';
import ReuseableCard from '@/components/ReuseableCard';
const Focus = () => {
  return (
    <ContainLayout>
      <div className='mx-auto flex flex-col '>
        <h3 className='text-[40px] font-bold'>
          <span className='text-green-shad2   '>Focus</span>
        </h3>
        <p className='text-[18px] '>
          RIF Is Focused On Achieving Five Objectives
        </p>
      </div>
      <div className='mx-auto grid place-items-center  gap-8 py-10 md:grid-cols-3'>
        <ReuseableCard
          imageSrc='/raise-hand.png'
          imageAlt='de'
          title='Combating militancy to promote positive youth engagement'
          className='max-w-[450px]'
        />
        <ReuseableCard
          imageSrc='/assets/mortarboard.png'
          imageAlt='de'
          title='Job Creation'
          className='max-w-[450px]'
        />

        <ReuseableCard
          imageSrc='/assets/salary.png'
          imageAlt='de'
          title='Enabling platforms for entrepreneurs'
          className='max-w-[450px]'
        />
        <ReuseableCard
          imageSrc='/assets/children.png'
          imageAlt='de'
          title='Early childhood development'
          className='max-w-[450px]'
        />
        <ReuseableCard
          imageSrc='/assets/mortarboard.png'
          imageAlt='de'
          title='Job Creation'
          className='max-w-[450px]'
        />
      </div>
    </ContainLayout>
  );
};

export default Focus;
