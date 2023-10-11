import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
  return (
    <section className='about home-two-about'>
      <div className='home-two-about-shape'>
        <img src='assets/images/shape/home-two-about-shape.png' alt='shape' />
      </div>
      <div className='container'>
        <div className='row '>
          <div className='col-xl-6'>
            <div data-aos='fade-right' className='about-left-container'>
              <div
                className='home-two-about-image-top paroller
                                relative left-10 top-20
                                h-[150px] w-[150px]
                                overflow-hidden rounded-full bg-gray-300'
                style={{
                  transform: `  translateY(-31px)
                                       matrix(1, 0, 0, 1, 0, 11)`,
                  transition: `transform 0.6s
                                         cubic-bezier(0, 0, 0, 1) 0s`,
                  willChange: 'transform',
                }}
              >
                <Image
                  src='/assets/images/who-we-are/iwere_1.jpg'
                  alt='image'
                  fill
                  className='object-contain'
                />
              </div>
              <div
                className='about-image-1 wow fadeInUp
                                animated relative top-[-20%] h-[630px] w-[550px]
                                 overflow-hidden rounded-full bg-gray-200'
                style={{
                  visibility: 'visible',
                  animationName: 'fadeInUp',
                }}
              >
                <Image
                  fill
                  src='/assets/images/who-we-are/iwere_3.JPG'
                  alt='image'
                  className='object-contain'
                />
              </div>
              <div
                className='home-two-about-image-bottom
                                paroller relative right-[-50%]
                                 top-[50%] grid h-[150px]
                                  w-[150px] place-items-center
                                 overflow-hidden
                                  rounded-full bg-gray-200'
                style={{
                  transform: ` translateY(-31px)
                                        matrix(1, 0, 0, 1, 0, 11)`,
                  transition: `transform 0.6s
                                        cubic-bezier(0, 0, 0, 1) 0s`,
                  willChange: 'transform',
                }}
              >
                <Image
                  src='/assets/iwere-homepage.jpg'
                  alt='image'
                  width={150}
                  height={150}
                  className='object-contain'
                />
              </div>
            </div>
          </div>
          <div data-aos='fade-left' className='col-xl-6'>
            <div className='home-two-about-wrapper'>
              <div className='about-right-container'>
                <div className='common-title'>
                  <h5>Who we are</h5>
                  <h3>Royal Iwere Foundation (RIF)</h3>
                </div>
                <h6>
                  RIF, an African non profit organisation founded in 2023, aims
                  to assist the Warri Kingdom by effectively tackling obstacles
                  and vulnerabilities that could hinder the state&apos;s
                  continuous development and its capacity to compete
                  internationally.
                </h6>
                <p>
                  This foundation was born out of a strategic rethink of the
                  Warri Kingdom from the lens of its people, its socio-economic
                  potential and the limitless possibilities for growth and
                  advancement via education and upskilling across various
                  demographics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
