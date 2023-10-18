import React from 'react'

const HeroBanner2 = ({ title }) => {
    return (
        <div className=" bg-cover  bg-center  md:h-[70vh]  h-[100%]   w-[100%] md:w-[100%] "
            style={{ backgroundImage: 'url("/assets/iwere-banner-3.jpg")' }}
        >
     <div className='w-full h-full backdrop-brightness-50'>
     <div className='flex justify-center items-center'>
                <div className='md:w-[40rem] '>
                    <div className=" flex flex-col justify-center items-center font-['Fiori_Dorati'] gap-2 w-full pt-[10rem]">

                        <h1 className="lg:text-[150px] font-museo font-bold whitespace-nowrap md:text-[120px] h-[45.59%]    text-center text-6xl py-3 text-white ">
                            {title}
                        </h1>

                    </div>

                </div>
            </div>
     </div>
        </div>
    )
}

export default HeroBanner2