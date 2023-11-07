import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ReuseableCard = ({ imageSrc, imageAlt, title, className }) => {
  useEffect(() => {
    AOS.init({
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom',
    });
  }, []);

  return (
    <div
      data-aos='flip-down'
      className={`border-3 flex h-full w-full flex-col items-center gap-8 border-b border-green-shad1 bg-white px-6 py-12 text-center shadow-md ${className}`}
    >
      <img src={imageSrc} alt={imageAlt} height='100' width='100' />
      <h3 className='text-[18px] font-bold lg:text-[20px]'>{title}</h3>
    </div>
  );
};

export default ReuseableCard;
