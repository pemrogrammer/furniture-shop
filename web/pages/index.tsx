import React, {useState} from 'react';

// components
import Cover from 'components/SubLandingPage/cover';
import AboutUs from 'components/SubLandingPage/aboutus';
import Products from 'components/SubLandingPage/products';
import ContactUs from 'components/SubLandingPage/contactus';

// styles
import styles from "styles/index.module.scss";


const Index = () : JSX.Element => {
  const [linkImage, setLinkImage] = useState<string>("https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")

  return (
    <>
      <Cover styles={styles} linkImage={linkImage} />
      <Products />
      <AboutUs />
      <ContactUs />
    </>
  )
}

export default Index;