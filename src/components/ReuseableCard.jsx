import React from 'react'

const ReuseableCard = ({ imageSrc, imageAlt, title }) => {
    return (
        <div className='bg-white border-b border-3 w-full h-full border-green-shad1 flex-col gap-8 text-center shadow-2xl flex items-center px-6 py-12'>
          <img src={imageSrc} alt={imageAlt} height='100' width='100' />
          <h3 className='text-[20px] font-bold'>{title}</h3>
        </div>
      );

}

export default ReuseableCard
