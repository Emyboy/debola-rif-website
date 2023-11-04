import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import Image from 'next/image';
import ContainLayout from '@/components/layout/ContainerLayout';
import { useInView } from 'react-intersection-observer';

const Whoweare = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: {
          opacity: {
            duration: 1,
          },
          x: {
            duration: 2, // Adjust the duration for slower motion
            ease: [0.43, 0.13, 0.23, 0.96], // Custom easing for slow motion
          },
        },
      });
    }
  }, [controls, inView]);

  return (
    <div className='py-32'>
      <ContainLayout>
        <div className='grid items-center gap-10 md:grid-cols-2' ref={ref}>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={controls}
            className='rounded-md'
          >
            <Image
              src='/assets/iwere-homepage.jpg'
              height='1200'
              width='1200'
              alt='ed'
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={controls}
          >
            <div>
              <p className='font-yeseva text-[20px]'> Welcome to RIF</p>
              <h3 className='text-[40px] font-bold'>
                WHO WE <span className='text-green-shad2'>ARE</span>
              </h3>
              <div className='mt-6 md:max-w-[500px]'>
                <p className='text-justify text-[16px] leading-[150%]'>
                  RIF, an African non-profit organization founded in 2023, aims to
                  assist the Warri Kingdom by effectively tackling obstacles and
                  vulnerabilities that could hinder the state's continuous
                  development and its capacity to compete internationally.
                </p>
                <p className='pt-6 text-justify text-[16px] leading-[150%]'>
                  "RIF is a restorative mission to re-engineer the mindsets of
                  indigenes of Warri Kingdom to propel them for a more productive
                  and fulfilling life, and in turn, be worthy examples for the
                  next generation."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </ContainLayout>
    </div>
  );
};

export default Whoweare;
