import Image from 'next/image';
import React from 'react';

const Mission = () => {
  return (
    <section className='about home-three-about'>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-6 '>
            <div data-aos='zoom-right-in' className='about-left-container'>
              <div
                className='about-image-1 wow
                                 fadeInUp animated relative
                                overflow-hidden '
                style={{
                  visibility: 'visible',
                  animationName: 'fadeInUp',
                }}
              >
                <Image
                  src='/assets/images/who-we-are/iwere_4.JPG'
                  alt='image'
                  fill
                />
              </div>
              <div
                data-aos='zoom-in-right'
                data-aos-delay='100'
                className='about-left-intro paroller'
                style={{
                  transform: `translateY(-70px)
                                         matrix(1, 0, 0, 1, 0, -11)`,
                  transition: `transform 0.6s
                                        cubic-bezier(0, 0, 0, 1) 0s`,
                  willChange: 'transform',
                }}
              >
                <div className='about-left-intro-inner'>
                  <h5>RIF</h5>
                  <p className='leading-[18px]'>
                    RIF is positioned to deliver obvious change in today&apos;s
                    society
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div data-aos='zoom-out-left' className='col-xl-6'>
            <div className='about-right-container'>
              <div className='about-right-container-inner'>
                <div className='common-title'>
                  <h5>Mission</h5>
                  <h3>Mission Statement</h3>
                </div>
                <p>
                  To provide physical, mental, and entrepreneurial support to
                  indigenes of the Warri Kingdom, thoroughly equipping them with
                  viable means to thrive in society, and ultimately changing
                  prevailing narratives within the region.
                </p>

                <div data-aos='' className='about-bnt-group'>
                  <div className='header-link-btn'>
                    <a href='/contact-us' target='_blank' className='btn-1'>
                      Get in Touch<span></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
