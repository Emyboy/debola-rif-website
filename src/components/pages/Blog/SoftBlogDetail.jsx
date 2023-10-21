import Image from 'next/image'
import React from 'react'

const SoftBlogDetail = ({title, link,img,alt, writer}) => {
  return (
<div className=''>
    <h4 className='text-[30px] text-green-shad2 font-bold py-5 '>Recent</h4>
<div class=" bg-gray-50  overflow-y-auto flex flex-col justify-center relative w-full overflow-hidden sm:pb-12">
  <div class="max-w-7xl mx-auto">
    <div class="relative group">
      <div class="absolute -inset-1 bg-gradient-to-r from-green-shad2 to-white rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <div class="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
      <Image
          src={img}
          alt={alt}
          width='500'
          height='500'
          className=" h-24 w-fit object-cover"
        />
        <div class="space-y-2">
          <p class="text-slate-800 text-[16px]  font-bold hover:text-green-shad2">{title}</p>
          <a href={link || '#'} class="block text-indigo-400 group-hover:text-slate-800 transition duration-200 pt-8" target="_blank " >Read Article →</a>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default SoftBlogDetail
