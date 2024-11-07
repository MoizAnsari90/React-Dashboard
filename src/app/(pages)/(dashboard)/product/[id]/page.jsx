'use client'
import { useParams } from "next/navigation";
import { useContext } from "react";
import { ProductContext } from "../page";
import Header from "@/app/Component/Dashboard/Header";


const ProductDetail = () => {
    const {id} = useParams();
    const {product} = useContext(ProductContext)
    const filterProduct = product?.filter((item)=> item.id === Number(id))
    console.log(id)
  return (
    <div className="text-white w-[100%] ">
    <Header />
    <div className="bg-black w-[100%] h-[100vh] text-center text-white flex justify-center items-center flex-col ">
        {
            filterProduct.map((item,index)=>{
                const{ id ,images, title , }=item
                return(
                    <div key={id} className="w-[25%] h-[400px] ">
                    <img src={images[0]} alt="" />
                    <p>{title}</p>
                    </div>
                )
            })
        }
    </div>
    </div>
    
  );
}

export default ProductDetail;

