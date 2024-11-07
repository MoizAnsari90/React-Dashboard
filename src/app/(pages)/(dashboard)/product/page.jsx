'use client'
import Header from "@/app/Component/Dashboard/Header";
import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext,  useEffect, useState } from "react";


export const ProductContext = createContext();

 
export const ProductProvider = ({ children }) =>{

  const [product, setProduct] = useState([]);
  const getData = async () => {
    try {
      const data = await axios.get('https://api.escuelajs.co/api/v1/products')
      setProduct(data.data.slice(1, 21))
      console.log(data.data)
    }
    catch (e) {
      console.log("Error")
    }

  }

  useEffect(() => {
    getData()
  }, [])
  

  
    return(
        <ProductContext.Provider value={{product}}>
              {children}
        </ProductContext.Provider>
    )
}



const ProductPage = () => {
  const router = useRouter();
  return (
    <>
    <div className=" bg-black flex justify-center items-center flex-wrap gap-2 " >
      <Header />
        <ProductProvider>
        <ProductContext>
        {
          ({product}) =>
          product?.map((item, index) => {
            const {id,title, images } = item;
            return (
              <div key={id} className=" w-[24%] h-[300px]">
                <img src={images[0]} alt="" onClick={()=>router.push(`./product/${id}`)} />
              </div>
            );
          })
        }
        </ProductContext>
        </ProductProvider>
    </div>
    </>
    


  );
}

export default ProductPage;

