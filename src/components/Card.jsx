// Card.js
import React from 'react';

const Card = ({ imageSrc, title, description,num }) => {
  return (
    <article className="flex flex-col shadow-xl mx-auto max-w-sm bg-red-100  transform duration-500 hover:-translate-y-2 cursor-pointer h-fit rounded-md">
      <div className='h-[50%] '>
        <img className='border border-red-500 overflow-hidden h-[30rem] w-full' src={imageSrc} alt={title} />
      </div>
  <div className='px-12 pb-20  pt-6 border border-red-500'>    <h1 className="font-extrabold text-6xl mb-10 text-gray-800">{num}</h1>
      <h2 className="font-bold mb-5 text-gray-800">{title}</h2>
      <p className="text-sm leading-relaxed text-gray-700">{description}</p></div>
    </article>
  );
};

export default Card;
