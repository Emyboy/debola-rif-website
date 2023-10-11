import { Instagram } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer class='footer'>
      <div class='footer_top'>
        <div class='container'>
          <div class='row items-start justify-between'>
            <div class='col-xl-4 col-md-6 col-lg-4 '>
              <div class='footer_widget'>
                <div class='footer_logo'>
                  <a href='#'>
                    <Image
                      width={200}
                      height={80}
                      src='/assets/images/logo.png'
                      alt=''
                    />
                  </a>
                </div>
                <p class='address_text text-justify'>
                  This foundation was born out of a strategic rethink of the
                  Warri Kingdom from the lens of its people, its socio-economic
                  potential and the limitless possibilities for growth and
                  advancement via education and upskilling across various
                  demographics.
                </p>
                <div class='socail_links'>
                  <ul>
                    <li>
                      <Link
                        className='text-primary-green-1 hover:scale-95 hover:text-primary-pink '
                        href='#'
                      >
                        <AiFillInstagram size={24} />
                      </Link>
                    </li>
                    <li>
                      <Link
                        className='text-primary-green-1 hover:scale-95 hover:text-primary-pink '
                        href='#'
                      >
                        <AiFillLinkedin size={24} />
                      </Link>
                    </li>
                    <li>
                      <a href='#'>
                        <i class='fa fa-dribbble'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i class='fa fa-instagram'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class='col-xl-2 col-md-6 col-lg-2'>
              <div class='footer_widget'>
                <h3 class='footer_title'>Services</h3>
                <ul class='links'>
                  <li>
                    <a href='#'>Donate</a>
                  </li>
                  <li>
                    <a href='#'>Sponsor</a>
                  </li>
                  <li>
                    <a href='#'>Fundraise</a>
                  </li>
                  <li>
                    <a href='#'>Volunteer</a>
                  </li>
                  <li>
                    <a href='#'>Partner</a>
                  </li>
                  <li>
                    <a href='#'>Jobs</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class='col-xl-3 col-md-6 col-lg-3'>
              <div class='footer_widget'>
                <h3 class='footer_title'>Contacts</h3>
                <div class='contacts'>
                  <p>
                    (+234)815 4105 285 <br />
                    Contact@rif.ng <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='copy-right_text'>
        <div class='container'>
          <div class='row'>
            <div class='bordered_1px '></div>
            <div class='col-xl-12'>
              <p class='copy_right text-center'>
                Copyright © {new Date().getFullYear()} All rights reserved |
                This template is made with{' '}
                <i class='ti-heart' aria-hidden='true'></i> by{' '}
                <a href='https://colorlib.com' target='_blank'>
                  Colorlib
                </a>
              </p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
