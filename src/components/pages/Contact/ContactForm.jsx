import axios from 'axios';
import React, { useState } from 'react';
// import axios from 'axios';
import Image from 'next/image';
import { toast } from 'react-toastify';
import ContainLayout from '@/components/layout/ContainerLayout';
import HeroBanner2 from '@/components/layout/HeroLayout';
import Link from 'next/link';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email,
      name,
      phoneNumber,
      subject,
      message,
    };

    try {
      const res = await toast.promise(
        axios.post('/api/contact', {
          email,
          name,
          phoneNumber,
          subject,
          message,
        }),
        {
          pending: ` We are processing your request.`,
          success: 'Thanks for reaching out to us! we get in touch shortly',
          error: 'Oops. an error occured please try again',
        }
      );
    } catch (error) {}
  };

  return (
<>
<HeroBanner2 title='contact us' />
<ContainLayout>
 
<div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
  <div class="container max-w-screen-lg mx-auto">
    <div>
      <h2 class="font-semibold text-xl text-gray-600">contact  us</h2>
      <p class="text-gray-500 mb-6 text-[20px] font-museo">Send Us A Message For Our
Next Project</p>

      <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
        <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
          <div class="text-gray-600">
            <p class="font-medium text-lg">Our Contact Details</p>
            
        <div className='py-6'>
        <h2 className='text-lg font-bold'>Email Adress</h2>
                 <div className=' flex items-center gap-4'>
                
                  <p className=''>Mail to</p>
                  <Link href='mailto:contact@rif.ng'>contact@rif.ng</Link>
                </div>
        </div>
        <div className='py-6'>
        <h2 className='text-lg font-bold'>Email Address</h2>
                 <div className=' flex items-center gap-4'>
                
                  <p className=''>Mail to</p>
                  <a href='mailto:contact@rif.ng' />
                </div>
        </div>
                
          </div>

          <div class="lg:col-span-2">
            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
              <div class="md:col-span-5">
                <label for="full_name">Full Name</label>
                <input type="text" name="full_name" id="full_name" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
              </div>

              <div class="md:col-span-5">
                <label for="email">Email Address</label>
                <input type="text" name="email" id="email" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="email@domain.com" />
              </div>

              <div class="md:col-span-3">
                <label for="address">phoneNumber</label>
                <input type="text" name="address" id="address" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="" />
              </div>

              <div class="md:col-span-2">
                <label for="city">Subject</label>
                <input type="text" name="city" id="city" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="" />
              </div>


              <div className='w-full'>
                <label for="city">Subject</label>
            <textarea name="" id="" class=" border mt-1 rounded px-4 bg-gray-50" cols="90" rows="10"></textarea>
              </div>
      
              <div class="md:col-span-5 text-right">
                <div class="inline-flex items-end">
                  <button class="bg-green-shad2 hover:bg-green-shad1 text-white font-bold py-2 px-4 rounded">Submit</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    <a href="https://www.buymeacoffee.com/dgauderman" target="_blank" class="md:absolute bottom-0 right-0 p-4 float-right">
      {/* <img src="https://www.buymeacoffee.com/assets/img/guidelines/logo-mark-3.svg" alt="Buy Me A Coffee" class="transition-all rounded-full w-14 -rotate-45 hover:shadow-sm shadow-lg ring hover:ring-4 ring-white"> */}
    </a>
</div>
</div>
</ContainLayout>
</>

  );
};

export default ContactForm;
