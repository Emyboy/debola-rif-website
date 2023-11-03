import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const EachProject = ({ location, date, title, img, link }) => {
  return (
    <article
      class='max-w-smw-full min-h-150 group z-0 mx-auto h-full  w-full transform cursor-pointer rounded-lg bg-cover bg-center shadow-xl duration-500 hover:-translate-y-2'
      style={{
        backgroundImage: `url('${img}')`,
      }}
    >
      <div class=' min-h-150 z-0 flex h-full w-full transform  flex-col rounded-lg px-10 pt-96 backdrop-brightness-50 duration-300'>
        <h1 class='mb-5 translate-y-20 transform text-3xl text-white duration-300 group-hover:translate-y-0'>
          {date}
        </h1>
        <div class='mb-5 h-2 w-16 translate-y-20 transform rounded-full bg-yellow-500 duration-300 group-hover:translate-y-0'></div>
        <p class='transform text-xl text-white opacity-0 duration-500 group-hover:opacity-80'>
          {title}
        </p>
        <p class='transform text-xl text-white opacity-0 duration-500 group-hover:opacity-80'>
          {location}
        </p>

        <Link
          href={link}
          className='font-bold text-white hover:text-green-shad2'
        >
          Read More <i className='flaticon-arrow-right text-white'></i>
        </Link>
      </div>
    </article>
  );
};

export default EachProject;
