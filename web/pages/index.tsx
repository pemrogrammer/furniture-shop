import React, {useState} from 'react';


const Index = () : JSX.Element => {
  const [linkImage, setLinkImage] = useState<string>("https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")

  const postCss = {
    itemMenu: "hover:text-gray-500 ",
  }

  const style = {
    backgroundImage: `url(${linkImage})`,
    // backgroundRepeat: "no-repeat",
    backgroundSize: 'cover', 
  }

  return (
    <>
    {/* header */}
      <section className="bg-gray-100 h-screen">
        <nav className="md:flex flex-wrap py-8 px-5 md:px-20 lg:px-60 hidden ">
          <div className="text-black text-2xl py-1">
            FS
          </div>
          <div className="min-w-max flex-1 ">
            <div className="flex flex-row gap-10 justify-center place-items-center py-2 ">
              <a href="#products" className={`cursor-pointer ${postCss.itemMenu} `}>Products</a>
              <a href="#companyProfile"className={`cursor-pointer ${postCss.itemMenu} `}>Company Profile</a>
              <a href="#contactUs" className={`cursor-pointer ${postCss.itemMenu} `}>Contact Us</a>
            </div>
          </div>
        </nav>
        <div 
          className={` flex flex-col items-center pt-40 bg-blue-200 h-screen bg-furniture cover`}
          style={style}>
          <h1 className="text-7xl font-bold quote ">Plan Your Dream Space</h1>
          {/* <p>Trusted Us</p> */}
        </div>
      </section>
      {/* end header */}
      {/* products */}
      <section id="products" className="bg-gray-100 w-full min-h-screen">
        products
      </section>
      {/* End products */}
      {/* Company Profile */}
      <section id="companyProfile" className="bg-red-300 w-full min-h-screen">
        Company Profile
      </section>
      {/* End Company Profile */}
      {/* Contact Us */}
      <section id="contactUs" className="bg-green-300 w-full min-h-screen">
        Contact Us
      </section>
      {/* End Contact Us */}
    </>
  )
}

export default Index;