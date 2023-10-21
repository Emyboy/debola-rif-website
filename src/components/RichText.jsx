import { PrismicRichText } from '@prismicio/react';
import React from 'react';

const RichText = ({ field }) => {
  return (
    <PrismicRichText
      field={field}
      components={{
        paragraph: ({ children }) => <p>{children}</p>,
        oListItem: ({ children }) => (
          <li
            style={{ listStyleType: 'decimal' }}
            className='ml-3 list-decimal'
          >
            {children}
          </li>
        ),
        listItem: ({ children }) => (
          <li style={{ listStyleType: 'disc' }} className='list-disc'>
            {children}
          </li>
        ),
        heading2: ({ children }) => (
          <h2 className='font-poppins mt-8 text-green-shad2  text-[18px] font-semibold'>
            {children}
          </h2>
        ),
        heading3: ({ children }) => (
          <h3 className='font-poppins text-[17px] font-bold text-green-shad1'>{children}</h3>
        ),
        heading4: ({ children }) => (
          <h3 className='font-poppins text-[16px] font-semibold'>{children}</h3>
        ),
        heading5: ({ children }) => (
          <h3 className='font-poppins text-[15px] font-semibold'>{children}</h3>
        ),
        heading6: ({ children }) => (
          <h3 className='font-poppins text-[14px] font-semibold'>{children}</h3>
        ),
      }}
    />
  );
};

export default RichText;
