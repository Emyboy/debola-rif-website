import axios from 'axios';
import React, { useState } from 'react';
// import axios from 'axios';
import Image from 'next/image';
import { toast } from 'react-toastify';
import ContainLayout from '@/components/layout/ContainerLayout';
import HeroBanner2 from '@/components/layout/HeroLayout';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { BiLoaderAlt } from 'react-icons/bi';

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const validationSchema = yup.object({
    email: yup
      .string()
      .email('Please enter a valid email')
      .required('Email is required'),
    name: yup
      .string()
      .required('Full name is required. Please enter your full name'),
    phoneNumber: yup.string(),
    subject: yup
      .string()
      .required('Subject is required. Please enter a subject for the mail'),
    message: yup
      .string()
      .required('Message is required. Please enter a message'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      phoneNumber: '',
      subject: '',
      message: '',
    },
    onSubmit: async (values) => {
      try {
        const res = await toast.promise(
          axios.post('/api/contact', {
            ...values,
          }),
          {
            pending: ` We are processing your request.`,
            success: 'Thanks for reaching out to us! we get in touch shortly',
            error: 'Oops. an error occured please try again',
          }
        );
      } catch (error) {
        toast.error('Something went wrong. Please try again');
      }
    },
    validationSchema,
  });

  return (
    <>
      <HeroBanner2 title='Contact us' />
      <ContainLayout>
        <div class='flex min-h-screen items-center justify-center bg-gray-100 p-6'>
          <div class='container mx-auto max-w-screen-lg'>
            <div>
              {/* <h2 class='font-museo text-[40px] font-semibold text-gray-600'>
                Contact us
              </h2> */}
              <h2 class='mb-6 font-poppins text-[30px] text-gray-500'>
                Send Us A Message For Our Next Project
              </h2>

              <form class='mb-6 rounded bg-white p-4 px-4 shadow-lg md:p-8'>
                <div class=''>
                  <div class='lg:col-span-2'>
                    <div class='grid grid-cols-1 gap-4  text-sm md:grid-cols-4'>
                      <InputField
                        className={'md:col-span-4'}
                        id={'name'}
                        label={'Full Name'}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isError={
                          formik.touched.name && Boolean(formik.errors.name)
                        }
                        errorMessage={formik.errors.name}
                        required={true}
                        value={formik.values.name}
                      />
                      <InputField
                        className={'md:col-span-4'}
                        id={'email'}
                        type={'email'}
                        label={'Email Address'}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isError={
                          formik.touched.email && Boolean(formik.errors.email)
                        }
                        errorMessage={formik.errors.email}
                        required={true}
                        value={formik.values.email}
                      />

                      {/* <div class='md:col-span-5'>
                        <label for='email' className='font-bold'>
                          Email Address
                        </label>
                        <input
                          type='text'
                          name='email'
                          id='email'
                          class='mt-1 h-[52px] w-full rounded border bg-gray-50 px-4'
                          placeholder='email@domain.com'
                        />
                      </div> */}

                      <InputField
                        className={'md:col-span-2'}
                        id={'phoneNumber'}
                        label={'Phone Number'}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isError={
                          formik.touched.phoneNumber &&
                          Boolean(formik.errors.phoneNumber)
                        }
                        errorMessage={formik.errors.phoneNumber}
                        value={formik.values.phoneNumber}
                      />
                      <InputField
                        className={'md:col-span-2'}
                        id={'subject'}
                        label={'Subject'}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isError={
                          formik.touched.subject &&
                          Boolean(formik.errors.subject)
                        }
                        errorMessage={formik.errors.subject}
                        required={true}
                        value={formik.values.subject}
                      />

                      <div className='grid gap-2 md:col-span-4'>
                        <label
                          for='city'
                          className='flex items-center gap-2 font-bold'
                        >
                          <span>Message</span>{' '}
                          <span className='text-red-400'>*</span>
                        </label>
                        <textarea
                          id='message'
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          class=' mt-1 h-[350px] w-full rounded border bg-gray-50 px-4 py-3 outline-none'
                        ></textarea>
                        {formik.touched.message &&
                          Boolean(formik.errors.message) &&
                          formik.errors.message && (
                            <p className='font-inter text-[12px] text-red-500 '>
                              {formik.errors.message}
                            </p>
                          )}
                      </div>

                      <div class=' md:col-span-5'>
                        <button class='h-[42px] w-full rounded bg-green-shad2 px-4 py-2 text-[18px] font-bold text-white hover:bg-green-shad1'>
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </ContainLayout>
    </>
  );
};

export default ContactForm;

const InputField = ({
  id,
  onChange,
  onBlur,
  type,
  placeholder,
  label,
  className,
  errorMessage,
  isError,
  required,
  value,
}) => {
  return (
    <div class={`grid gap-2 ${className}`}>
      <label for={id} className='flex items-center gap-2 font-bold'>
        <span>{label}</span>
        {required && <span className='text-red-400'>*</span>}
      </label>
      <input
        type={type || 'text'}
        onBlur={onBlur}
        onChange={onChange}
        id={id}
        value={value}
        class='mt-1 h-[52px] w-full rounded border bg-gray-50 px-4 outline-none focus:border-none'
        placeholder={placeholder}
      />
      {isError && errorMessage && (
        <p className='font-inter text-[12px] text-red-500 '>{errorMessage}</p>
      )}
    </div>
  );
};
