import React from 'react';
import HeroSection from './HeroSection';
import Mission from './Mission';
import Vision from './Vision';
import How_rif from './How_rif';
import Focus from './Focus';
import FeatureIn from './FeatureIn';
import { NextSeo } from 'next-seo';

const WhoWeAre = ({ featured_in }) => {
  return (
    <>
      <NextSeo
        title='Royal Iwere Foundation'
        description={`An Iwere Nation's Human Capital Development Programme`}
      />
      <HeroSection />
      <Focus />
      <Mission />
      <Vision />
     
      <FeatureIn featured_in={featured_in} />
    </>
  );
};

export default WhoWeAre;
