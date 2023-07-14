import { Products } from "@/utils/mock"
import ProductCard from "@/app/components/ProductCard"
import { StaticImageData } from "next/image"

const getProductsbycategory=(category:string)=>
   {
    return Products.filter((product)=>product.category===category);
   }

   export default function Page({ params }: { params: { slug: string } }) 
   {
       const result=getProductsbycategory(params.slug);
        
       return (
       
     <div className='grid grid-cols-4 pl-28 pt-12 pb-24 justify-center items-center gap-4 '>
    {
         result.length>0?
      
         result.map((product)=>(
         <ProductCard key={product.id} 
         price={product.price} 
         img={product.image as StaticImageData} 
         title={product.name}
         id={product.id}
         discription={product.discription}
         /> ))
     
   
   :<p>no product found</p>    


    }

</div>
           
        )
  }