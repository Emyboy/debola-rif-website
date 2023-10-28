import ContainLayout from '@/components/layout/ContainerLayout';
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
    image:
      'https://media.premiumtimesng.com/wp-content/files/2015/10/Leadership-newspapers.png',
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
    <ContainLayout>
      <section className=' px-5  py-12'>
        <div className='container relative mx-auto '>
          <div className='mx-auto flex flex-col '>
            <h3 className='text-[40px] font-bold'>
              {' '}
              <span className='text-green-shad2   '>Feauture in </span>
            </h3>
          </div>
          <div className='hidden w-full flex-wrap items-center gap-x-8 gap-y-4 overflow-hidden py-8 lg:flex lg:justify-between lg:gap-x-0 '>
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
    </ContainLayout>
  );
};

const FeatureCard = ({ image, link, alt }) => {
  return (
    <Link href={link} target='_blank' className='relative    '>
      <div className='group relative h-[40px] max-w-[75px] lg:max-w-[120px]'>
        <Image
          width={50}
          height={50}
          src={image}
          alt='icons'
          className=' h-full w-fit object-contain grayscale-[100] transition-all duration-500 ease-out group-hover:grayscale-0'
        />
      </div>
    </Link>
  );
};

export default FeatureIn;
