import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import ContainLayout from './ContainerLayout';
const Footer = () => {
  return (
    <div className='bg-[rgb(234,216,217)] pt-8 text-white'>
      <ContainLayout>
        <div className='container items-center  justify-center px-6 md:flex   '>
          {/* <div className="flex flex-col">
          <Image
            width={167.04}
            height={48}
            src="/images/Logo.svg"
            alt="logo"
          />

          <p className="mt-4 text-[#5c5860a8] text-[16px]">
            Harness the power of the digital realm with our transformative web
            applications. Our expert developers leverage the latest technologies
            and industry best practices to craft highly functional, visually
            stunning, and user-friendly web applications.
          </p>
        </div> */}

          <div className='py-12  md:col-span-2 md:grid md:grid-cols-4 md:gap-16 md:pt-0 '>
            <div className='pb-4 md:pb-0'>
              <h6 className='font-bold text-green-shad2'>logo</h6>
              <ul>
                <h3 className='font-semibold text-[#5c5860a8]'>
                  This foundation was born out of a strategic rethink of the
                  Warri Kingdom from the lens of its people, its socio-economic
                  potential and the limitless possibilities for growth and
                  advancement via education and upskilling across various
                  demographics.
                </h3>
              </ul>
            </div>

            <div className='pb-4 md:pb-0'>
              <h6 className='font-bold text-green-shad2'>Quick Link</h6>
              <ul>
                <li className='py-2 text-[16px] font-medium capitalize text-[#5c5860a8]'>
                  <Link href='/'> Home </Link>
                </li>
                <li className='py-2 text-[16px] font-medium capitalize text-[#5c5860a8]'>
                  <Link href='/who-we-are'>Who we are</Link>
                </li>
                <li className='py-2 text-[16px] font-medium capitalize text-[#5c5860a8]'>
                  <Link href='/contact-us'> Contact Us</Link>
                </li>
                <li className='py-2 text-[16px] font-medium capitalize text-[#5c5860a8]'>
                  <Link href='/blog'> Blog</Link>
                </li>
              </ul>
            </div>
            <div className='pb-4 md:pb-0'>
              <h6 className='text-[20px] font-bold text-green-shad2'>
                Contact
              </h6>
              <ul>
                <li className='py-2 text-[16px] font-medium capitalize text-[#5c5860a8]'>
                  <Link href='mailto:contact@rif.ng'>contact@rif.ng</Link>
                </li>

                <li className='py-2 text-[16px] font-medium capitalize text-[#5c5860a8]'>
                  <a href='tel:+2348154105285'>(+234) 815 4105 285</a>
                </li>
              </ul>
            </div>
            <div className='pb-4 md:pb-0'>
              <h6 className='text-[20px] font-bold text-green-shad2'>
                Social media
              </h6>
              <ul className='grid w-[11rem] grid-cols-4 items-center justify-center pb-3  md:pb-0'>
                <li className='py-2 text-[16px] font-medium capitalize text-[#5c5860a8]'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-6'
                    viewBox='0 0 512 512'
                  >
                    <path d='M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z' />
                  </svg>
                </li>
                <li className='py-2 text-[16px] font-medium capitalize text-[#5c5860a8]'>
                  <a href='https://www.linkedin.com/company/royal-iwere-foundation/'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-6'
                      viewBox='0 0 448 512'
                    >
                      <path d='M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z' />
                    </svg>
                  </a>
                </li>
                <li className='py-2 text-[16px]  font-medium capitalize text-[#5c5860a8]'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-6'
                    viewBox='0 0 448 512'
                  >
                    <path d='M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z' />
                  </svg>
                </li>
                <li className='py-2 text-[16px]  font-medium capitalize text-[#5c5860a8]'>
                  <a href='https://www.instagram.com/royaliwerefoundation/'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-6'
                      viewBox='0 0 448 512'
                    >
                      <path d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z' />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ContainLayout>
    </div>
  );
};

export default Footer;
