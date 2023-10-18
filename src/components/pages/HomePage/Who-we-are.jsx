import Image from 'next/image';

import ContainLayout from '@/components/layout/ContainerLayout'
import React from 'react'

const Whoweare = () => {
  return (
<div  className='py-32'>
<ContainLayout>
     <div className='grid md:grid-cols-2 items-center gap-10 '>
      <div>
        <Image src='/assets/iwere-homepage.jpg' className='rounded-md' height='1200' width='1200' alt='ed'  />
      </div>
      <div>
        <div>
       <p className='text-[20px] font-yeseva'> Welcome to RIF</p>
       <h3 className='text-[40px] font-bold'>WHO WE <span className='text-green-shad2   '>ARE</span></h3>
<div className='md:max-w-[500px] mt-6'>
<p className='text-[16px]'>
   RIF, an African non profit organisation founded in 2023, aims to
          assist the Warri Kingdom by effectively tackling obstacles and
          vulnerabilities that could hinder the state's continuous development
          and its capacity to compete internationally. RIF, an African non
          profit organisation founded in 2023, aims to assist the Warri Kingdom
          by effectively tackling obstacles and vulnerabilities that could
          hinder the state's continuous development and its capacity to compete
          internationally.
          
   </p>
   <p className='text-[16px] pt-6'>
   "RIF is a restorative mission to re-engineer the mindsets of indigenes
          of Warri Kingdom to propel them for a more productive and fulfilling
          life, and in turn, be worthy examples for the next generation."

   </p>
</div>
        </div>
      </div>
      </div>
   </ContainLayout>
</div>
  )
}

export default  Whoweare