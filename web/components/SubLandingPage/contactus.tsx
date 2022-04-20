import React from 'react';

const ContactUs = (): JSX.Element => {

  return (
    <>
      <section 
        id="contactUs" 
        className=" bg-gray-100 w-full px-7 py-10
                    md:px-[10%] md:py-[5%] ">
        <div className=" flex flex-col gap-5
                        md:px-[30%] ">
          <h1 className=" text-5xl pb-5 text-center font-bold ">Contact Us</h1>
          <div className="flex flex-col gap-5">
            <input 
              type="text" 
              className="border-transparent focus:border-gray-500 focus:ring-0 rounded-md "
              placeholder="Enter your name" />
            <input 
              type="text"
              className="border-transparent focus:border-gray-500 focus:ring-0 rounded-md" 
              placeholder="Enter your email address" />
          </div>
          <div>
            <textarea 
              className="w-full border-transparent focus:border-gray-500 focus:ring-0 rounded-md"
              name="message" 
              id="" 
              cols={30} 
              rows={10}></textarea>
          </div>
          <div >
            <button 
              className="bg-gray-500 hover:bg-gray-700 text-white w-full font-bold py-2 px-4 rounded"
              >Send</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactUs;