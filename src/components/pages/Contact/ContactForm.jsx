import axios from 'axios';
import React, { useState } from 'react';
// import axios from 'axios';
import Image from 'next/image';
import { toast } from 'react-toastify';

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
    <section className='contact-us grid md:grid-cols-2 px-8 items-center justify-center text-white bg-green-900'>
      <div>
        <Image src='/assets/images/home/rif-woman.jpeg' className='rounded-md' alt='lkwd' height='500' width='500'/>
      </div>
 <div>
 <div
        className='pattern-layer'
        style={{
          backgroundImage: 'url(assets/images/shape/shape-02.png)',
        }}
      ></div>
      <div className='container'>
        {/* <form onSubmit={handleSubmit} className='row'>
          <div data-aos='fade-up' className='col-xl-12'>
            <div className='align-title'>
              <h5>Contact with us</h5>
              <h3>
                Send Us A Message For Our <br /> Next Project
              </h3>
            </div>
          </div>
          <div className='col-xl-6'>
            <div>
              <input
                onChange={(e) => setName(e.target.value)}
                data-aos='fade-right'
                type='text'
                name='name'
                className='contuct-us-input'
                placeholder='Your Name'
                value={name}
              />
            </div>
          </div>
          <div className='col-xl-6'>
            <div>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type='email'
                name='email'
                className='contuct-us-input'
                placeholder='Your Email'
                data-aos='fade-left'
                value={email}
              />
            </div>
          </div>
          <div className='col-xl-6'>
            <div>
              <input
                onChange={(e) => setPhoneNumber(e.target.value)}
                data-aos='fade-right'
                type='tel'
                name='number'
                value={phoneNumber}
                className='contuct-us-input'
                placeholder='Phone Number'
              />
            </div>
          </div>
          <div className='col-xl-6'>
            <div>
              <input
                data-aos='fade-left'
                type='text'
                name='sub'
                className='contuct-us-input'
                placeholder='Subject'
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
          </div>
          <div className='col-xl-12'>
            <div>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                data-aos='fade-up'
                name='textarea'
                className='contuct-us-input contuct-us-textarea'
                placeholder='Your Message'
                value={message}
              ></textarea>
            </div>
          </div>
          <div className='col-xl-12'>
            <div className='contact-us-btn'>
              <div>
                <button
                  data-aos='fade-up'
                  type='submit'
                  className='btn-1 bg-[#00715d]'
                >
                  Send Message{' '}
                  <span
                    style={{
                      top: ' 113px',
                      left: ' 150.766px',
                    }}
                  ></span>
                </button>
              </div>
            </div>
          </div>
        </form> */}
        <form class="w-full max-w-lg">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide  text-white text-xs font-bold mb-2" for="grid-first-name">
        First Name
      </label>
      <input class="appearance-none block w-full bg-gray-200  text-white border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
      <p class="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide  text-white text-xs font-bold mb-2" for="grid-last-name">
        Last Name
      </label>
      <input class="appearance-none block w-full bg-gray-200  text-white border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide  text-white text-xs font-bold mb-2" for="grid-password">
        Password
      </label>
      <input class="appearance-none block w-full bg-gray-200  text-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" />
      <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
    </div>
  </div>

</form>
      </div>
      {/* <ToastContainer /> */}
 </div>
    </section>
  );
};

export default ContactForm;
