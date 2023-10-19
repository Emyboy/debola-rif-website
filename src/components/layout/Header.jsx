import Link from 'next/link'
import React,{useState,useEffect} from 'react'
import {AiOutlineClose,AiOutlineMenuFold} from 'react-icons/ai'
const Header = () => {
  const [nav ,setNav] = useState(false)

    const  handleClick = ()=>{
        setNav(!nav)
      }
  return (
    
    <main>
    <div className='bg-white shadow-lg'>
 <div className='max-w-[1240]  py-4 flex  justify-between items-center container  capitalize h-25 mx-auto px-5 sticky top-0'>
 <h1 className=' '>
  Logo
 </h1>
      <ul className="hidden sm:flex  font-bold text-gray-400">
        <li className='p-3 cursor-pointer' ><Link href='/'>home</Link></li>
        <li className='p-3 cursor-pointer'cur><Link href='/who-we-are'>who we are</Link></li>
        <li className='p-3 cursor-pointer'> <Link href='/past-project'>Past Project</Link></li>
        <li className='p-3 cursor-pointer'><Link href='/contact-us'> contact us</Link></li>
        <li className='p-3 '><Link href='/blog'>Blog</Link> </li>
        <li className='p-3 '><Link href='/impact-report'> Impact project</Link></li>
      </ul>

      <div onClick={handleClick} className="block sm:hidden">
        {!nav?  <AiOutlineMenuFold className='fixed right-0 mr-5 ease-in-out duration-700'  size={30} /> :   <AiOutlineClose className='fixed right-0 mr-5 ease-in-out duration-700' size={30} />}
      
     
      </div>
      <div className={nav? 'fixed top-0 bg-white px-4 left-0 w-[60%] z-50  border-r h-full text-black  border-r-gray-600 ease-out duration-700' :'fixed top-[-100%]   duration-1000' }>
      <h1 className=' text-3xl p-3 font-bold pt-3 text-[#3e873e] uppercase '> Logo</h1>

      <ul className=" sm:flex text-lg z-50 font-bold text-gray-400">
        <li className='p-3 cursor-pointer' ><Link href='/'>home</Link></li>
        <li className='p-3 cursor-pointer'cur><Link href='/who-we-are'>who we are</Link></li>
        <li className='p-3 cursor-pointer'> <Link href='/past-project'>Past Project</Link></li>
        <li className='p-3 cursor-pointer'><Link href='/contact-us'> contact us</Link></li>
        <li className='p-3 '><Link href='/blog'>Blog</Link> </li>
        <li className='p-3 '><Link href='/impact-report'> Impact project</Link></li>
      </ul>
      </div>

 </div>
    </div>

  </main>
  )
}

export default Header