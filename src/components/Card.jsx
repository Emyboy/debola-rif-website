// Card.js
import React from 'react';

const Card = ({ imageSrc, title, description,num }) => {
  return (
    <article className="flex flex-col shadow-xl mx-auto max-w-sm bg-red-100 py-20 px-12 transform duration-500 hover:-translate-y-2 cursor-pointer max-h-190 rounded-md">
      <div className="min-h-62">
        <img className="mx-auto" src={imageSrc} alt={title} />
      </div>
      <h1 className="font-extrabold text-6xl mt-28 mb-10 text-gray-800">{num}</h1>
      <h2 className="font-bold mb-5 text-gray-800">{title}</h2>
      <p className="text-sm leading-relaxed text-gray-700">{description}</p>
    </article>
  );
};

export default Card;
