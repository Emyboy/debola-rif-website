'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { RiMoonFill, RiSunFill } from 'react-icons/ri'
import { FaAngleDown, FaAngleLeft, FaAngleRight, FaAngleUp, FaBars, FaTimes } from 'react-icons/fa'
import { useRouter } from 'next/router'
import { CSSTransition } from 'react-transition-group'
const MainNav = () => {
  const [nav, setNav] = useState(false);
  const [DropdownOpen, setDropdownOpen] = useState(false);
  const [innerDropdownOpen, setInnerDropdownOpen] = useState(false);
  const [innerDropdownOpen2, setInnerDropdownOpen2] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Load dark mode state from local storage
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'true') {
      document.body.classList.add('dark');
      setDarkMode(true);
    }

    // Automatically switch modes at regular intervals
    const intervalId = setInterval(switchMode, 1000 * 60); // Check every minute

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const switchMode = () => {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinutes = now.getMinutes();
    const currentTimeInMinutes = currentHour * 60 + currentMinutes;

    // Calculate the time range from 7 AM to 6:30 PM (19:30)
    const startTimeInMinutes = 7 * 60;
    const endTimeInMinutes = 19 * 60 + 30;

    if (currentTimeInMinutes >= startTimeInMinutes && currentTimeInMinutes < endTimeInMinutes) {
      document.body.classList.remove('dark');
      setDarkMode(false);
      localStorage.setItem('darkMode', 'false');
    } else {
      document.body.classList.add('dark');
      setDarkMode(true);
      localStorage.setItem('darkMode', 'true');
    }
  };





  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        innerDropdownOpen &&
        !event.target.closest('.dropdown-toggle') &&
        !event.target.closest('.dropdown-menu')
      ) {
        setInnerDropdownOpen(false);
        setInnerDropdownOpen2(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [innerDropdownOpen, innerDropdownOpen2]);







 // Get the router object

  const toggleDropdown = () => {

    setDropdownOpen(!DropdownOpen);
    setInnerDropdownOpen(false);
    setInnerDropdownOpen2(false);
  };

  const toggleInnerDropdown = () => {
    setInnerDropdownOpen2(false);
    setInnerDropdownOpen(!innerDropdownOpen);
  };
  const toggleInnerDropdown2 = () => {
    setInnerDropdownOpen(false);
    setInnerDropdownOpen2(!innerDropdownOpen2);
  };

  const handleClick = () => {
    setNav(!nav);
  };

  const handleOuterDropdownClick = () => {
    // Toggle the inner dropdown when the outer dropdown link is clicked
    toggleInnerDropdown();
  };
  return (

    <main>
      <div className="bg-transparent py-2 border-b z-50  fixed top-0 left-0 right-0 shadow-lg backdrop-filter backdrop-blur-lg">

        <div className='   flex  justify-between items-center container  capitalize h-25 px-5 sticky top-0'>
<h1>LOgo</h1>

          <ul className="hidden sm:flex items-center font-bold text-gray-300">
            <li className={`px-4 py-5 cursor-pointer hover:text-[#ff5c00] `} ><Link href='/'>Home</Link></li>
            <li className={`px-4 py-5 cursor-pointer hover:text-[#ff5c00] `}><Link href='/who-we-are' >Who We Are</Link></li>
            <li className={`px-4 py-5 cursor-pointer hover:text-[#ff5c00] `}> <Link href='/past-project' >Past project </Link></li>
            <li className={`px-4 py-5 cursor-pointer hover:text-[#ff5c00] `}> <Link href='/contact-us' > Contact us </Link></li>
            <li className={`px-4 py-5 cursor-pointer hover:text-[#ff5c00] `}> <Link href='/blog' > Blog</Link></li>
            <li className={`px-4 py-5 cursor-pointer hover:text-[#ff5c00] `}> <Link href='/impact-report' > impact report</Link></li>

      


            <li className={`px-4 py-5 `}> <Link href='/portfolio' className='boxed-btn3'>Beacome A Volunteer</Link></li>
          </ul>

     



          <div onClick={handleClick} className="block sm:hidden text-white py-5">
            {!nav && <FaBars className=' ease-in-out duration-700' size={20} />}


          </div>
          <div className={nav ? 'fixed top-0 bg-white dark:bg-gray-800 z divide-y divide-gray-500  left-0 w-[100%]   border-r h-full   border-r-gray-600 ease-out duration-700' : 'fixed left-[-100%]   duration-1000'}>
            <div className="flex items-center justify-between py-4 px-5 dark:text-white bg-white dark:bg-gray-800">
              <h3 className=' font-bold  uppercase '>
                Menu
              </h3>

              <div onClick={handleClick} className="block sm:hidden">
                {nav && <FaTimes className=' ease-in-out duration-700' size={20} />}


              </div>
            </div>

            <div className=" bg-white dark:bg-gray-800 dark:text-white h-[100vh] px-2">
              <ul >
                <li className={`p-3 cursor-pointer  `} ><Link href='/'>Home</Link></li>
                <li className={`p-3 cursor-pointer  `}><Link href='/'>Who We Are</Link></li>
                <li className={`p-3 cursor-pointer `}> <Link href='/songs' >Past project </Link></li>
                <li className={`p-3 cursor-pointer `}> <Link href='/booking'>SERVICES</Link> </li>
              </ul>
              <div className='border-2 flex flex-row w-[50%]  justify-center gap-2 h-10 shrink-0 items-center p-2
          border-[#7FFFFF] rounded-[50%] text-gray-300 cursor-pointer'><Link href='/booking'>BOOK A SESSION</Link></div>

            </div>


          </div>

        </div>
      </div>

    </main>




  )
}

export default MainNav