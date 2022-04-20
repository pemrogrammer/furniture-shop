import React, {useState} from 'react';

// style
import styles from 'styles/products.module.scss';

// type
import { tProduct } from 'types/products.type';



const Products = (): JSX.Element => {
  const [linkCupboard, setLinkCupboard] = useState<string>("https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")
  const [linkTable, setLinkTable] = useState<string>("https://images.unsplash.com/photo-1593512828202-a5b036b628a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80")
  const [linkChear, setLinkChear] = useState<string>("https://images.unsplash.com/photo-1517705008128-361805f42e86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNoYWlyfGVufDB8fDB8fA%3D%3D&w=1000&q=80")

  const Product = ({srcImage, titleProduct} : tProduct):JSX.Element => {

    return (
      <div className={`bg-white shadow-lg w-full text-center rounded-xl 
                        md:w-1/4 md:h-[55vh] ${styles.product} `}> 
        <div className="flex flex-col items-center h-full w-full">
          <img src={srcImage} 
            className={` shadow-2xl rounded-xl w-10 
                        md:w-[20vw] md:h-[40vh] ${styles["image-product"]} `}
            alt="" 
            />
            <div className="flex flex-col mt-[10%] px-10">
              <h1 className="font-bold text-2xl">{titleProduct}</h1>
              <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
            </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <section 
        id="products" 
        className="bg-gray-100 w-full flex flex-col 
                    md:h-screen">
        <div className="w-full text-center mt-10">
          <h1 className={` text-5xl ${styles.label} `}>Best Products</h1>
        </div>
        <div className="flex md:flex-row flex-col justify-center place-items-center
                        md:gap-16 md:h-full ">
          <Product srcImage={linkCupboard} titleProduct="Cupboard" />
          <Product srcImage={linkTable} titleProduct="Table" />
          <Product srcImage={linkChear} titleProduct="Chear" />
        </div>
      </section>
    </>
  )
} 

export default Products;