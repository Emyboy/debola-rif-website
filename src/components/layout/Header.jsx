import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenuFold } from 'react-icons/ai';
import { useRouter } from 'next/router';

const Header = () => {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const router = useRouter();

  const handleClick = () => {
    setNav(!nav);
  };

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  const links = [
    { text: 'Home', href: '/' },
    { text: 'Who We Are', href: '/who-we-are' },
    { text: 'Past Project', href: '/past-project' },
    { text: 'Contact Us', href: '/contact-us' },
    { text: 'Blog', href: '/blog' },
    { text: 'Impact Project', href: '/impact-report' },
  ];

  useEffect(() => {
    // Detect the current route and set the active link accordingly
    const currentPath = router.pathname;
    const activeIndex = links.findIndex((link) => link.href === currentPath);
    if (activeIndex !== -1) {
      setActiveLink(activeIndex);
    }
  }, [router.pathname]);

  return (
    <main>
      <div className='bg-white shadow-lg'>
        <div className='max-w-[1240]  py-4 flex  justify-between items-center container  capitalize h-25 mx-auto px-5 '>
          <h1 className=' '>Logo</h1>
          <ul className='hidden sm:flex font-bold text-gray-400'>
            {links.map((link, index) => (
              <li
                key={index}
                className={`p-3 cursor-pointer ${
                  activeLink === index ? 'active-link text-green-shad1  border-green-shad2 border-b-2' : ''
                }`}
                onClick={() => handleLinkClick(index)}
              >
                <Link href={link.href}>{link.text}</Link>
              </li>
            ))}
          </ul>
          <div onClick={handleClick} className='block sm:hidden'>
            {!nav ? (
              <AiOutlineMenuFold
                className='fixed right-0 mr-5 ease-in-out duration-700'
                size={30}
              />
            ) : (
              <AiOutlineClose
                className='fixed right-0 mr-5 ease-in-out duration-700'
                size={30}
              />
            )}
          </div>
          <div
            className={
              nav
                ? 'fixed top-0 bg-black px-4 left-0 w-full z-[999]  border-r h-fit text-black  border-r-gray-600 ease-out duration-700'
                : 'fixed top-[-100%]   duration-1000'
            }
          >
            <div onClick={handleClick} className='block mt-10 sm:hidden'>
              {!nav ? (
                <AiOutlineMenuFold
                  className='fixed right-0 mr-5 text-white ease-in-out duration-700'
                  size={30}
                />
              ) : (
                <AiOutlineClose
                  className='fixed text-white right-0 mr-5 ease-in-out duration-700'
                  size={30}
                />
              )}
            </div>
            <h1 className=' text-3xl p-3 font-bold pt-3 text-[#3e873e] uppercase '>
              Logo
            </h1>
            <ul className='sm:flex text-lg font-bold text-gray-400'>
              <li className='p-3 cursor-pointer'>
                <Link href='/'>Home</Link>
              </li>
              <li className='p-3 cursor-pointer'>
                <Link href='/who-we-are'>Who We Are</Link>
              </li>
              <li className='p-3 cursor-pointer'>
                <Link href='/past-project'>Past Project</Link>
              </li>
              <li className='p-3 cursor-pointer'>
                <Link href='/contact-us'>Contact Us</Link>
              </li>
              <li className='p-3 '>
                <Link href='/blog'>Blog</Link>
              </li>
              <li className='p-3 '>
                <Link href='/impact-report'>Impact Project</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Header;
