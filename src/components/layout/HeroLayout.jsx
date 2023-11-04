import React from 'react';

const HeroBanner2 = ({ title, backgroundImage }) => {
  return (
    <div
      className=' h-[50vh]  w-[100%]  bg-cover  bg-top   md:h-[80vh] md:w-[100%] '
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : 'url("https://images.unsplash.com/photo-1485110168560-69d4ac37b23e?auto=format&fit=crop&q=80&w=1480&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
      }}
    >
      <div className='h-full w-full backdrop-brightness-50'>
        <div className='grid h-full w-full place-items-center'>
          <div className=' '>
            <div className=" flex w-full flex-col items-center justify-center gap-2   font-['Fiori_Dorati']">
              <h1 className='h-[45.59%] whitespace-nowrap py-3 text-center font-museo text-6xl    font-bold text-white md:text-[120px] lg:text-[150px] '>
                {title}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner2;
