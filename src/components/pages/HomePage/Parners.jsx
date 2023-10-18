import React from "react";
import Image from "next/image";
import ContainLayout from "@/components/layout/ContainerLayout";
const icons = [
  "/images/specials/coloredair.svg",
  "/images/specials/coloredstripe.svg",
  "/images/specials/coloredcanva.svg",
  "/images/specials/coloredchase.svg",
  "/images/specials/coloredtesla2.svg",
  "/images/specials/coloredtesla1.svg",
];

const Airbnb = () => {
  return (
    <div className="relative h-[40px] group max-w-[75px] lg:max-w-[120px]">
      <Image
        width={50}
        height={50}
        src={icons[0]}
        alt="icons"
        className=" w-fit grayscale-[100] group-hover:grayscale-0 transition-all duration-500 ease-out"
      />
    </div>
  );
};
const Stripe = () => {
  return (
    <div className="relative h-[40px] group max-w-[75px] lg:max-w-[120px]">
      <Image
        width={50}
        height={50}
        src={icons[1]}
        alt="icons"
        className=" w-fit grayscale-[100] group-hover:grayscale-0 transition-all duration-500 ease-out"
      />
    </div>
  );
};
const Canva = () => {
  return (
    <div className="relative h-[40px] group max-w-[75px] lg:max-w-[120px]">
      <Image
        width={50}
        height={50}
        src={icons[2]}
        alt="icons"
        className=" w-fit grayscale-[100] group-hover:grayscale-0 transition-all duration-500 ease-out"
      />
    </div>
  );
};
const Chase = () => {
  return (
    <div className="relative h-[40px] group max-w-[75px] lg:max-w-[120px]">
      <Image
        width={50}
        height={50}
        src={icons[3]}
        alt="icons"
        className=" w-fit grayscale-[100] h-full group-hover:grayscale-0 transition-all duration-500 ease-out"
      />
    </div>
  );
};
const Tesla1 = () => {
  return (
    <div className="relative h-[40px] group max-w-[75px] lg:max-w-[120px]">
      <Image
        width={50}
        height={50}
        src={icons[5]}
        alt="icons"
        className=" w-fit grayscale-[100] h-full group-hover:grayscale-0 transition-all duration-500 ease-out"
      />
    </div>
  );
};
const Tesla2 = () => {
  return (
    <div className="relative h-[40px] group max-w-[75px] lg:max-w-[120px]">
      <Image
        width={50}
        height={50}
        src={icons[4]}
        alt="icons"
        className=" w-fit grayscale-[100] h-full group-hover:grayscale-0 transition-all duration-500 ease-out"
      />
    </div>
  );
};
const Partners = () => {
  return (
<ContainLayout>
<div className="mt-20 px-[6%] py-12 5xl:px-[25%]">
      <h3>OUR PARTNERS</h3>
     <div className="overflow-hidden hidden  lg:flex gap-x-8 gap-y-4 lg:gap-x-0 flex-wrap lg:justify-between w-full items-center ">
       <Airbnb />
       <Stripe />
       <Canva />
       <Chase />

       <Tesla2 />
       <Tesla1 />
     </div>
     <div className="overflow-hidden flex  lg:hidden gap-x-8 gap-y-4 lg:gap-x-0 flex-wrap justify-between w-full items-center ">
       <Airbnb />
       <Stripe />
       <Canva />
     </div>
     <div className="overflow-hidden flex mt-6  lg:hidden gap-x-8 gap-y-4 lg:gap-x-0 flex-wrap justify-between w-full items-center ">
       <Chase />

       <Tesla2 />
       <Tesla1 />
     </div>
   </div>
</ContainLayout>
  );
};

export default Partners;