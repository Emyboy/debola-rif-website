import ContainLayout from '@/components/layout/ContainerLayout'
import Link from 'next/link'
import React from 'react'

import { TimelineLite } from 'gsap';
const HeroBanner = ({ title, subtitle, children, description }) => {
  let tl = gsap.timeline
  let text = useRef(null)
  useEffect(()=>{
    tl.to(text ,1.2 ,{ duration: 2, x: 100 })
  })
  return (
    <div
      className=' h-[100%]  w-[100%]  bg-cover  bg-left md:h-[100vh] md:w-[100%] '
      style={{
        backgroundImage: 'url("/african-children-with-arms-crossed.jpg")',
      }}
    >
      <div className='h-full w-full backdrop-brightness-50'>
        <ContainLayout>
          <div className='flex flex-col py-[18rem]'>
            <h3 className='font-museo text-[50px] font-bold text-white' ref={el =>text = el}>
              RIF- ROYAL IWERE FOUNDATION
            </h3>
            <p className='text-[20px] text-white'>
              An Iwere Nation's Human Capital Development Programme
            </p>
            <button className='mt-6 h-[40px] w-fit rounded-lg  bg-[rgb(0,104,55)] px-12 text-[1.2rem] font-bold text-white'>
              <Link href='/contact-us'> Contact us </Link>
            </button>
          </div>
        </ContainLayout>
      </div>
    </div>
  );
};

export default HeroBanner;
