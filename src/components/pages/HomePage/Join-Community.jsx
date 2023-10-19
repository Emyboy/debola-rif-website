import ContainLayout from '@/components/layout/ContainerLayout'
import Image from 'next/image'
import React from 'react'

const JoinCommunity = () => {
  return (
<div className='py-16'>
<ContainLayout>
<div className='grid md:grid-cols-2 items-center'>
<div className='lg:max-w-[500px]'>
<h2 className='text-[35px] text-bold font-bold py-4 '>Become A  <span className='text-green-shad2   '> Volunteer Today</span></h2>
<p className='text-[17px]'>
   The best way to find yourself is to lose yourself in the service of others. These are wise words by revered Mahatma Gandhi. </p>

<p className='py-3'>Are you an established entrepreneur, teacher, or upcoming professional? Do you see the beautiful work we do at RIF, and do you believe you can make a firm contribution with your efforts? We encourage you to join us.</p>

<button className='bg-green-shad1 hover:bg-white hover:text-black rounded-md shadow-md font-bold  px-6 py-3 text-white'>Become A Vulunteer</button>
</div>
<div className='grid md:grid-cols-1 items-center gap-6'>
  {/* <Image src='/bill-wegener-LqOO5Ko0zSo-unsplash.jpg' className='rounded-md h-full w-full' alt='eop' width='300' height='300' /> */}
  <Image src='/bill-wegener-7MD4DR9jbP0-unsplash.jpg' className='rounded-md ' alt='eop' width='500' height='500' />
</div>
</div>
</ContainLayout>
</div>
  )
}

export default JoinCommunity

