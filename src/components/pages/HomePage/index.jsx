import React from 'react';
import HeroSection from './HeroSection';
import WhoWeAre from './Who-we-are';
import { useSpring, animated } from 'react-spring';
import WhatWeDo from './What-we-do';
import JoinCommunity from './Join-Community';
import LatestBlog from './LatestBlog';
import Parners from './Parners';
import CountDown from '@/components/CountDown';



const index = ({ posts }) => {
  return (
    <>
      <HeroSection />
      <WhoWeAre />
      {/* <Quote /> */}
      <CountDown />
      <WhatWeDo />
      <JoinCommunity />
      <LatestBlog posts={posts} />
      {/* <Parners /> */}
    </>
  );
};

export default index;
