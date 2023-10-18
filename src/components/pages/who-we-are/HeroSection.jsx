// import Image from 'next/image';
// import React from 'react';

// const HeroSection = () => {
//   return (
//     <section className='about home-two-about'>
//       <div className='home-two-about-shape'>
//         <img src='assets/images/shape/home-two-about-shape.png' alt='shape' />
//       </div>
//       <div className='container'>
//         <div className='row '>
//           <div className='col-xl-6'>
//             <div data-aos='fade-right' className='about-left-container'>
//               <div
//                 className='home-two-about-image-top paroller
//                                 relative left-10 top-20
//                                 h-[150px] w-[150px]
//                                 overflow-hidden rounded-full bg-gray-300'
//                 style={{
//                   transform: `  translateY(-31px)
//                                        matrix(1, 0, 0, 1, 0, 11)`,
//                   transition: `transform 0.6s
//                                          cubic-bezier(0, 0, 0, 1) 0s`,
//                   willChange: 'transform',
//                 }}
//               >
//                 <Image
//                   src='/assets/images/who-we-are/iwere_1.jpg'
//                   alt='image'
//                   fill
//                   className='object-contain'
//                 />
//               </div>
//               <div
//                 className='about-image-1 wow fadeInUp
//                                 animated relative top-[-20%] h-[630px] w-[550px]
//                                  overflow-hidden rounded-full bg-gray-200'
//                 style={{
//                   visibility: 'visible',
//                   animationName: 'fadeInUp',
//                 }}
//               >
//                 <Image
//                   fill
//                   src='/assets/images/who-we-are/iwere_3.JPG'
//                   alt='image'
//                   className='object-contain'
//                 />
//               </div>
//               <div
//                 className='home-two-about-image-bottom
//                                 paroller relative right-[-50%]
//                                  top-[50%] grid h-[150px]
//                                   w-[150px] place-items-center
//                                  overflow-hidden
//                                   rounded-full bg-gray-200'
//                 style={{
//                   transform: ` translateY(-31px)
//                                         matrix(1, 0, 0, 1, 0, 11)`,
//                   transition: `transform 0.6s
//                                         cubic-bezier(0, 0, 0, 1) 0s`,
//                   willChange: 'transform',
//                 }}
//               >
//                 <Image
//                   src='/assets/iwere-homepage.jpg'
//                   alt='image'
//                   width={150}
//                   height={150}
//                   className='object-contain'
//                 />
//               </div>
//             </div>
//           </div>
//           <div data-aos='fade-left' className='col-xl-6'>
//             <div className='home-two-about-wrapper'>
//               <div className='about-right-container'>
//                 <div className='common-title'>
//                   <h5>Who we are</h5>
//                   <h3>Royal Iwere Foundation (RIF)</h3>
//                 </div>
//                 <h6>
//                   RIF, an African non profit organisation founded in 2023, aims
//                   to assist the Warri Kingdom by effectively tackling obstacles
//                   and vulnerabilities that could hinder the state&apos;s
//                   continuous development and its capacity to compete
//                   internationally.
//                 </h6>
//                 <p>
//                   This foundation was born out of a strategic rethink of the
//                   Warri Kingdom from the lens of its people, its socio-economic
//                   potential and the limitless possibilities for growth and
//                   advancement via education and upskilling across various
//                   demographics.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import CountDown from '@/components/CountDown'
import ContainLayout from '@/components/layout/ContainerLayout'
import HeroBanner2 from '@/components/layout/HeroLayout'
import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
<div>
<HeroBanner2  title='who we are '  />
  
    <div className='flex flex-col mx-auto items-center py-16'>
       <p className='text-[20px] font-yeseva'> who we are </p>
       <h3 className='text-[40px] font-bold'>Royal Iwere <span className='text-green-shad2   '>Foundation (RIF) </span></h3>
<div className='md:max-w-[900px] text-gray-500 font-bold text-center mt-6'>
<p className='text-[16px]'>
RIF, an African non profit organisation founded in 2023, aims to assist the Warri Kingdom by effectively tackling obstacles and vulnerabilities that could hinder the state's continuous development and its capacity to compete internationally
          
   </p>
   <p className='text-[16px] pt-6'>
   This foundation was born out of a strategic rethink of the Warri Kingdom from the lens of its people, its socio-economic potential and the limitless possibilities for growth and advancement via education and upskilling across various demographics.

   </p>
</div>
        </div>
       

      
<div className='pb-16 relative '>
        {/* Background Image */}
        <div
          className='bg-green-shad2   bg-cover bg-top w-full'
          style={{
            color: 'white',
            backgroundImage: 'url("/istockphoto-155376862-1024x1024.jpg")',
            backgroundAttachment: 'fixed', // Set the background image as fixed
            backgroundPosition: 'center', // Center the background image
          }}
        >
         
<div className='backdrop-brightness-50 w-full h-full'>
<ContainLayout>
<div className='flex justify-center py-6 items-center flex-col text-center'>
<p className='text-[20px] font-yeseva'> our origin </p>
       <h3 className='text-[40px] font-bold'>How Did RIF Come To Be</h3>
</div>

<div className='w-full gap-6 place-content-center items-center grid md:grid-cols-2 lg:grid-cols-2 mx-auto   h-full '>
<div>
<Image src='/pexels-lagos-food-bank-initiative-9968379.jpg' alt='wsdf' className='rounded-md'  width='600' height='600' />
</div>
<div className=''>
<span className='font-bold text-white text-[30px]'>
                    Ogiame Atuwatse III
                  </span>
                  , <p className='font-bold py-4'>the paramount ruler of the Kingdom of Warri and the 21st Olu
                  of Warri declared in his coronation address to the world:</p>
<p className='font-bold'> &quot; We will look to honour our women; we will encourage
                  them, build them up and support them in realising their
                  inestimable potential. As we do this, we will also see the
                  multiplier effect in the collective development of our people.
                  We will ensure that our women, both old and young, are
                  honoured and respected not only by word but in actual cultural
                  practice. We will look to actively seek the opinion and
                  counsel of our women, and opportunities that avail themselves
                  to the Itsekiri nation will be used to empower our women to
                  enable them to contribute their substance to the growth and
                  development of the Itsekiri Nation. So I say to our women
                  today, you will no longer be invisible&quot;</p>
                  <p className='py-6 font-bold'>
                  Upon this declaration, Olori Atuwatse III, driven by a like
                  passion for the mothers and children of Iwere Land and the
                  Warri Kingdom, birthed The Royal Iwere Foundation (RIF).
                  </p>
</div>
  </div>
  </ContainLayout>
</div>

          </div>
          
          </div>

</div>
  )
}

export default HeroSection