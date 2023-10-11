import Link from "next/link";
import React, { useRef, useEffect } from "react";

const JoinCommunity = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    // Function to handle the parallax effect as the user scrolls
    const handleParallax = () => {
      // Calculate the scroll position
      const scrollY = window.scrollY;
      // Apply the parallax effect by adjusting the background position
      parallaxRef.current.style.backgroundPositionY = `${scrollY * 0.5}px`;
    };

    // Add an event listener to the window's scroll event
    window.addEventListener("scroll", handleParallax);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleParallax);
    };
  }, []);

  return (
    <section
      className="relative"
    >
      <div   
      ref={parallaxRef}
      className="call "
      style={{
        backgroundImage:
          'url("/assets/images/home/african-woman-pouring-water-recipient-outdoors.jpeg")',
        filter: "brightness(0.8)",
        height: "100vh", // Adjust brightness (0.5 for 50% darkness)
        transition: "background-position 0.1s ease-in-out", // Smooth transition
      }}>
      <div className="">
        <div className="row">
          <div className="col-xl-12">
            <div className="call-title my-32">
              {/* <h2 data-aos="flip-up" className="flex justify-center items-center text-[50px] py-9 text-white">Become A Volunteer Today</h2> */}
      <div className='md:max-w-[80%] text-center mx-auto'>
      <h2 data-aos="flip-up" className="flex justify-center items-center text-[50px] py-9 text-white">Become A Volunteer Today</h2>

      <p data-aos="fade-up" className="text-white">
                <q>
                  {" "}
                  The best way to find yourself is to lose yourself in the
                  service of others.
                </q>{" "}
                These are wise words by revered Mahatma Gandhi.
            
                Are you an established entrepreneur, teacher, or upcoming
                professional? Do you see the beautiful work we do at RIF, and
                do you believe you can make a firm contribution with your
                efforts? We encourage you to join us.

                Click the link below to send us an email. A designated RIF
                representative will reach out to you for a brief assessment
                call.{" "}
              </p>
              <div data-aos="flip-up" className="header-link-btn mt-8">
                <Link href="mailto:contact@rif.ng" className="boxed-btn3">
             
              beacome a volunteer
                </Link>
              </div>
      </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default JoinCommunity;
