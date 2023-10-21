import ContainLayout from '@/components/layout/ContainerLayout'
import Link from 'next/link'
import React from 'react'

const HeroBanner = ({ title, subtitle, children, description }) => {
  return (
 
     <div className=" bg-cover  bg-left  md:h-[100vh]  h-[100%] w-[100%] md:w-[100%] "
      style={{ backgroundImage: 'url("/african-children-with-arms-crossed.jpg")' }}
    >
<div className='backdrop-brightness-50 w-full h-full'>
<ContainLayout>
  <div className='flex flex-col py-[18rem]'>
    <h3 className='text-[50px] text-white font-bold font-museo'>RIF- ROYAL IWERE FOUNDATION</h3>
    <p className='text-[20px] text-white' >An Iwere Nation's Human Capital Development Programme</p>
    <button className='text-white px-12 font-bold mt-6  py-3 rounded-lg bg-[rgb(0,104,55)] w-fit'>
      <Link href='/contact-us'>     contact us </Link>
    </button>
  </div>
 </ContainLayout>
</div>

    </div>
  )
}

export default HeroBanner