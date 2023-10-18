import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import ContainLayout from './layout/ContainerLayout';

const CountDown = () => {
  const [counter, setCounter] = useState(false);

  return (
    <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
      <div className='pb-16 relative'>
        {/* Background Image */}
        <div
          className='bg-green-shad2 h-[10rem] bg-cover bg-left w-full'
          style={{
            color: 'white',
            backgroundImage: 'url("/assets/iwere-banner-2.jpg")',
            backgroundAttachment: 'fixed', // Set the background image as fixed
            backgroundPosition: 'center', // Center the background image
          }}
        >
          {/* Text Content Container */}
          <div className='w-full grid grid-cols-3 lg:grid-cols-4 mx-auto place-items-center items-center h-full backdrop-brightness-50'>
            <div>
              <CountUp className='text-[40px] font-bold' start={0} end={35} duration={6} delay={0} />
              <span className='text-[40px] font-bold text-green-shad2'>+</span>
            </div>
            <div>
              <CountUp className='text-[40px] font-bold' start={0} end={12} duration={6} delay={0} />
              <span className='text-[40px] font-bold text-green-shad2'> M</span>
            </div>
            <div>
              <CountUp className='text-[40px] font-bold' start={0} end={200} duration={6} delay={0} />
              <span className='text-[40px] font-bold text-green-shad2'> M</span>
            </div>
            <div>
              <CountUp className='text-[40px] font-bold' start={0} end={1200} duration={6} delay={0} />
            </div>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default CountDown;
