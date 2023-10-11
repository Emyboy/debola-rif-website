import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const features = [
  {
    alt: 'businessday',
    image: '/assets/images/feature/biblack.svg',
    link: 'https://businessday.ng/opinion/article/celebrating-a-quintessential-queen-consort-of-warri-kingdom-olori-atuwatse-iii/',
  },
  {
    alt: 'leadership',
    image: '/assets/images/feature/Leadership_Logo-1.gif',
    link: 'https://leadership.ng/olu-of-warri-launches-royal-iwere-society-as-iyatsere-team-emerges-ball-point-winner/',
  },
  {
    alt: 'Thisday',
    image: '/assets/images/feature/thisday.png',
    link: 'https://www.thisdaylive.com/index.php/2023/03/19/the-class-elegance-of-queen-consort-of-warri-kingdom',
  },
  {
    alt: 'Vanguard',
    image: '/assets/images/feature/Vanguard-logo.png',
    link: 'https://www.vanguardngr.com/2023/04/finnish-ambassador-olu-of-warri-synergize-to-boost-science-technology-others/amp/#amp_tf=From%20%251%24s&aoh=16892354555028&referrer=https%3A%2F%2Fwww.google.com',
  },
  {
    alt: 'the cable',
    image: '/assets/images/feature/the-cable.webp',
    link: 'https://www.thecable.ng/olori-atunwase-iii-the-first-lady-of-warri-kingdom/amp',
  },
  {
    alt: 'the cable',
    image: '/assets/images/feature/bentv-logo-458.png',
    link: 'https://bentelevision.com/olori-atuwatse-iii-empowers-50-deltans-to-mark-international-womens-month/',
  },
];

const FeatureIn = ({ featured_in }) => {
  return (
    <section className='bg-whit mb-[10rem]  px-5'>
      <div className='container relative mx-auto '>
        <h3 className=' text-[2rem]'>Featured in</h3>
        <div className='row mt-8 gap-3 '>
          {featured_in?.map((feature) => (
            <FeatureCard
              key={feature.id}
              image={feature?.data?.logo?.url}
              link={feature?.data?.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ image, link, alt }) => {
  return (
    <Link
      href={link}
      target='_blank'
      className='relative block  h-[200px] w-full max-w-[350px] rounded-[12px] bg-[#f9f4e8] hover:scale-105'
    >
      <Image
        fill
        className='object-contain'
        src={image}
        alt={alt || 'feature'}
      />
    </Link>
  );
};

export default FeatureIn;
