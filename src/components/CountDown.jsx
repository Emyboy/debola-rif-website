import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import ContainLayout from './layout/ContainerLayout';

const CountDown = () => {
  const [counter, setCounter] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCounter(true)}
      onExit={() => setCounter(false)}
    >
      <div className='relative pb-16'>
        {/* Background Image */}
        <div
          className='h-[10rem] w-full bg-green-shad2 bg-cover bg-left'
          style={{
            color: 'white',
            backgroundImage:
              'url("https://images.unsplash.com/photo-1502224562085-639556652f33?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGNoYXJpdHl8ZW58MHx8MHx8fDA%3D")',
            backgroundAttachment: 'fixed', // Set the background image as fixed
            backgroundPosition: 'center', // Center the background image
          }}
        >
          {/* Text Content Container */}
          <div className='flex h-full w-full flex-wrap items-center justify-center  px-5 backdrop-brightness-50'>
            <div className='flex flex-wrap items-center justify-center gap-7 lg:w-[80%] lg:justify-between'>
              <div>
                <CountUp
                  className='text-[40px] font-bold'
                  start={0}
                  end={35}
                  duration={6}
                  delay={0}
                />
                <span className='text-[40px] font-bold text-green-shad2'>
                  +
                </span>
              </div>
              <div>
                <CountUp
                  className='text-[40px] font-bold'
                  start={0}
                  end={12}
                  duration={6}
                  delay={0}
                />
                <span className='text-[40px] font-bold text-green-shad2'>
                  {' '}
                  M
                </span>
              </div>
              <div>
                <CountUp
                  className='text-[40px] font-bold'
                  start={0}
                  end={200}
                  duration={6}
                  delay={0}
                />
                <span className='text-[40px] font-bold text-green-shad2'>
                  {' '}
                  M
                </span>
              </div>
              <div>
                <CountUp
                  className='text-[40px] font-bold'
                  start={0}
                  end={1200}
                  duration={6}
                  delay={0}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default CountDown;
