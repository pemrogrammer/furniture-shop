import React from 'react';

import tNavbar from 'types/navbar.type';

const Navbar = ({styles, linkImage}: tNavbar ): JSX.Element => {

  const style = {
    backgroundImage: `url(${linkImage})`,
    // backgroundRepeat: "no-repeat",
    backgroundSize: 'cover', 
  }

  return (
    <>
      <section className=" h-screen navbar ">
          <nav className="px-5 py-1 bg-transparent bg-gray-100
                          md:flex md:flex-wrap md:px-20 md:py-5 lg:px-60">
            <div className="text-black text-2xl py-1 font-bold 
                            md:block hidden">
              Furniture Shop
            </div>
            <h1 className="text-black text-2xl py-1 font-bold
                            md:hidden ">FS</h1>
            <div className="min-w-max flex-1 hidden
                            md:block ">
              <div className="flex flex-row gap-10 justify-end place-items-center py-2 ">
                <a href="#products" className={`cursor-pointer item-menu `}>Products</a>
                <a href="#aboutUs"className={`cursor-pointer item-menu `}>About Us</a>
                <a href="#contactUs" className={`cursor-pointer item-menu `}>Contact Us</a>
              </div>
            </div>
          </nav>
          <div 
            className={`flex flex-col items-center pt-40 h-screen bg-top px-7
                        md:bg-center md:px-7 ${styles.cover}`}
            style={style}>
            <h1 className={`font-bold ${styles.quote} text-center text-3xl
                            md:text-7xl`}>Plan Your Dream Space</h1>
            {/* <p>Trusted Us</p> */}
          </div>
        </section>
    </>
  )
}

export default Navbar;