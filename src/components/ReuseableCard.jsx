import React from 'react';

const ReuseableCard = ({ imageSrc, imageAlt, title, className }) => {
  return (
    <div
      className={`border-3 flex h-full w-full flex-col items-center gap-8 border-b border-green-shad1 bg-white px-6 py-12 text-center shadow-md ${className}`}
    >
      <img src={imageSrc} alt={imageAlt} height='100' width='100' />
      <h3 className='text-[20px] font-bold'>{title}</h3>
    </div>
  );
};

export default ReuseableCard;
