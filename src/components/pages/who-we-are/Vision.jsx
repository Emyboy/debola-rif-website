import Image from 'next/image';
import React from 'react';

const Vision = () => {
  return (
    <section className='about home-three-about bg-white'>
      <div className='container '>
        <div className='row flex-row-reverse'>
          <div className='col-xl-6'>
            <div data-aos='zoom-right-in' className='about-left-container'>
              <div
                className='about-image-1 wow
                                 fadeInUp animated relative
                                  overflow-hidden bg-red-500'
                style={{
                  visibility: 'visible',
                  animationName: 'fadeInUp',
                }}
              >
                <Image
                  src='/assets/images/who-we-are/iwere_5.JPG'
                  alt='image'
                  fill
                />
              </div>
            </div>
          </div>

          <div data-aos='zoom-in-left' className='col-xl-6'>
            <div className='about-right-container'>
              <div className='about-right-container-inner'>
                <div className='common-title'>
                  <h5>Vision</h5>
                </div>
                <p>
                  To become West Africa&apos;s model foundation for indigenous
                  mindset re-engineering, education, and skilling via deliberate
                  collaborative investment in human capacity/resource
                  development.
                </p>

                <div className='about-bnt-group'>
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

export default Vision;
