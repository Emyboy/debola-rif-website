import ContainLayout from '@/components/layout/ContainerLayout'
import Link from 'next/link'
import React from 'react'
import { TweenMax,Power3 } from 'gsap';
import { useRef } from 'react';
import { useEffect } from 'react';

import { TimelineLite } from 'gsap';
const HeroBanner = ({ title, subtitle, children, description }) => {
  let tl = new TimelineLite()
  let text = useRef(null)
  useEffect(()=>{
    tl.from(text ,1.2 , {y:1280, ease: Power3.easeInOut})
  })
  return (
 
     <div className=" bg-cover  bg-left  md:h-[100vh]  h-[100%] w-[100%] md:w-[100%] "
      style={{ backgroundImage: 'url("/african-children-with-arms-crossed.jpg")' }}
    >
<div className='backdrop-brightness-50 w-full h-full'>
<ContainLayout>
  <div className='flex flex-col py-[18rem]'>
    <h3 className='text-[50px] text-white font-bold font-museo' rel={el=> text =el}>RIF- ROYAL IWERE FOUNDATION</h3>
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