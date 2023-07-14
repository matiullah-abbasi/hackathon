import { Products } from "@/utils/mock"
import ProductCard from "../components/ProductCard"
import { StaticImageData } from "next/image"
const Allproducts=()=>{
    
    return (
    <>
    <div className='grid grid-cols-4 pl-28 pt-12 pb-24 justify-center items-center gap-4 '>
   {

    Products.map((product)=>(
    <ProductCard key={product.id} 
    id={product.id}
    price={product.price} 
    img={product.image as StaticImageData} 
    title={product.name}
    discription={product.discription}
   /> ))
  }
  </div>
  </>
    )
    
}
export default Allproducts