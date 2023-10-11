import React from 'react';
import HeroSection from './HeroSection';
import WhoWeAre from './Who-we-are';
import WhatWeDo from './What-we-do';
import JoinCommunity from './Join-Community';
import LatestBlog from './LatestBlog';
import Parners from './Parners';

const index = ({ posts }) => {
  return (
    <>
      <HeroSection />
      <WhoWeAre />
      {/* <Quote /> */}
      <WhatWeDo />
      <JoinCommunity />
      <LatestBlog posts={posts} />
      <Parners />
    </>
  );
};

export default index;
