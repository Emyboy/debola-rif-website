import ContainLayout from '@/components/layout/ContainerLayout';
import HeroBanner2 from '@/components/layout/HeroLayout';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div>
      <HeroBanner2 title='Who We Are ' />

      <div className='mx-auto flex flex-col items-center py-16'>
        <p className='font-yeseva text-[20px]'> who we are </p>
        <h3 className='text-[40px] font-bold'>
          Royal Iwere{' '}
          <span className='text-green-shad2   '>Foundation (RIF) </span>
        </h3>
        <div className='mt-6 text-center font-bold text-gray-500 md:max-w-[900px]'>
          <p className='text-[16px]'>
            RIF, an African non profit organisation founded in 2023, aims to
            assist the Warri Kingdom by effectively tackling obstacles and
            vulnerabilities that could hinder the state's continuous development
            and its capacity to compete internationally
          </p>
          <p className='pt-6 text-[16px]'>
            This foundation was born out of a strategic rethink of the Warri
            Kingdom from the lens of its people, its socio-economic potential
            and the limitless possibilities for growth and advancement via
            education and upskilling across various demographics.
          </p>
        </div>
      </div>

      <div className='relative pb-16 '>
        {/* Background Image */}
        <div
          className='w-full   bg-green-shad2 bg-cover '
          style={{
            color: 'white',
            backgroundImage: 'url("/istockphoto-155376862-1024x1024.jpg")',
            backgroundAttachment: 'fixed', // Set the background image as fixed
            backgroundPosition: 'center', // Center the background image
          }}
        >
          <div className='w-full py-12 backdrop-brightness-50'>
            <ContainLayout>
              <div className='flex flex-col items-center justify-center py-6 text-center'>
                <p className='font-yeseva text-[20px]'> our origin </p>
                <h3 className='text-[40px] font-bold'>
                  How Did RIF Come To Be
                </h3>
              </div>

              <div className='mx-auto grid h-full w-full place-content-center items-center gap-6 md:grid-cols-2   lg:grid-cols-2 '>
                <div>
                  <Image
                    src='/pexels-lagos-food-bank-initiative-9968379.jpg'
                    alt='wsdf'
                    className='rounded-md'
                    width='600'
                    height='600'
                  />
                </div>
                <div className=''>
                  <span className='text-[30px] font-bold text-white'>
                    Ogiame Atuwatse III
                  </span>
                  ,{' '}
                  <p className='py-4 font-bold'>
                    the paramount ruler of the Kingdom of Warri and the 21st Olu
                    of Warri declared in his coronation address to the world:
                  </p>
                  <p className='font-bold'>
                    {' '}
                    &quot; We will look to honour our women; we will encourage
                    them, build them up and support them in realising their
                    inestimable potential. As we do this, we will also see the
                    multiplier effect in the collective development of our
                    people. We will ensure that our women, both old and young,
                    are honoured and respected not only by word but in actual
                    cultural practice. We will look to actively seek the opinion
                    and counsel of our women, and opportunities that avail
                    themselves to the Itsekiri nation will be used to empower
                    our women to enable them to contribute their substance to
                    the growth and development of the Itsekiri Nation. So I say
                    to our women today, you will no longer be invisible&quot;
                  </p>
                  <p className='py-6 font-bold'>
                    Upon this declaration, Olori Atuwatse III, driven by a like
                    passion for the mothers and children of Iwere Land and the
                    Warri Kingdom, birthed The Royal Iwere Foundation (RIF).
                  </p>
                </div>
              </div>
            </ContainLayout>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
