import React, {useState} from 'react';

const AboutUs = (): JSX.Element => {

  return (
    <>
      <section 
        id="aboutUs" 
        className=" bg-white flex flex-col gap-5 pt-10 w-full px-7 pb-10 text-center
                    md:px-[10%] md:py-[5%] ">
        <h1 className=" text-5xl pb-5 text-center font-bold ">About Us</h1>
        {/* <p className="text-2xl md:text-6xl md:font-bold">Furnitur shop </p> */}
        <p className="md:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
          is Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </section>
    </>
  )
}

export default AboutUs;