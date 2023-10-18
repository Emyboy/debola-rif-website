import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const EachProject = ({ location, date, title, img, link }) => {
  return (
  //   <div className='col-xl-4 col-lg-2 relative mt-2 h-[450px] w-[100%] max-w-[350px]'>
  //     <div
  //       className='causes-card
  //      event-card wow

  // fadeInUp animated relative h-full '
  //       data-wow-delay='00ms'
  //       data-wow-duration='1500ms'
  //       style={{
  //         visibility: 'visible',
  //         animationDuration: '1500ms',
  //         animationDelay: '0ms',
  //         animationName: 'fadeInUp',
  //         background: 'linear-gradient(to top, black, transparent)',
  //       }}
  //     >
  //       <div className='causes-image blog-image event-image'>
  //         <img src={img} alt={title} />
  //       </div>
  //       <div className='blog-contant event-content'>
  //         <div className='header-link-btn'>
  //           <a className='btn-1'>
  //             {date}
  //             <span></span>
  //           </a>
  //         </div>
  //         <div className='comments'>
  //           <ul>
  //             {/* <li><i className="fa fa-clock"></i> <span>{ }</span></li> */}
  //             <li>
  //               <i className='flaticon-pin'></i> <span> {location}</span>
  //             </li>
  //           </ul>
  //         </div>
  //         <Link href={link} className='hover-content'>
  //           {title}
  //         </Link>
  //         <div className='blog-btn event-btn opacity-btn'>
  //           <Link href={link}>
  //             Read More <i className='flaticon-arrow-right'></i>
  //           </Link>
  //         </div>
  //       </div>
  //     </div>
  //   </div>

  <article class="mx-auto max-w-smw-full w-full h-full  shadow-xl bg-cover bg-center min-h-150 transform duration-500 hover:-translate-y-2 cursor-pointer group" style={{
    backgroundImage: `url('${img}')`,
  }}>
  <div class=" backdrop-brightness-50 min-h-150 px-10 flex flex-col pt-96 hover:bg-opacity-75 transform duration-300">
      <h1 class="text-white text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
          {date}
      </h1>
      <div class="w-16 h-2 bg-yellow-500 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
      </div>
      <p class="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
     
          {title}
       
      </p>
      <p class="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
     
          {location}
       
      </p>
      {/* <Link href={link}>
            Read More <i className='flaticon-arrow-right text-white'></i>
          </Link> */}
  </div>
</article>
  );
};

export default EachProject;
