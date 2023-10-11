import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { menus } from '@/lib/constants';
import Link from 'next/link';

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('scroll', () =>
      window.scrollY > 200 ? setIsVisible(true) : setIsVisible(false)
    );
  }, []);
  return (
    <div
      className={`overflow-x-hidden
        ${menuOpen ? 'mobile-menu-visible' : ''}`}
    >
      <Header isVisible={isVisible} setMenuOpen={setMenuOpen} />

      {children}

      <Footer />
    </div>
  );
};

export default Layout;
