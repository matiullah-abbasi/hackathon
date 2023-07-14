import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ShoppingCart } from 'lucide-react'
import model from "/public/model.png"
import BAZAAR from "/public/BAZAAR.png"
import InStyle from "/public/InStyle.png"
import BUSTLE from "/public/BUSTLE.png"
import VERSACE from "/public/VERSACE.png"
import { Badge } from '@/components/ui/badge'
export default function Hero() {
  return (
    <>
    {/* //header of main page*/}
    <div>
  <div className='flex flex-1  pt-20 sm:flex-row'>
    <div className='flex flex-col w-full md:w-1/2 sm:flex-col'>
     
        <div>            <Badge className='bg-blue-200 text-blue-600 text-2xl px-4 py-2 rounded-xl hover:bg-blue-300'> Sale70%</Badge>
    
           </div>
      <div className='pt-10 w-full'>
             <h1 className='text-5xl font-bold'>
             An Industrial Take on Streetwear
             </h1>
             <p className='pt-10 pb-10 text-2xl'>
             Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
             </p>
      </div>
   
      <div  className=' h-20 p-4 justify-center item center flex w-48 bg-gray-950 text-white bg'>
                  <ShoppingCart size={50}/>
                  <Button className=' pb-4 text-2xl font-sans,serif bg-gray-950'>Start Shopping</Button>
      </div>  
  

     <div className='pt-32 flex gap-10'>
       <Image src={BAZAAR} alt="bazaar" width={100}   height={35}  />
       <Image src={BUSTLE} alt="bustle" width={100}   height={35}  />
       <Image src={InStyle} alt="instyle" width={100}   height={35} />  
       <Image src={VERSACE} alt="versace" width={100}   height={35}  /> 
      </div>
 </div>

             <div className='w-1/2 flex justify-center flex-col '>
                  <div className=' rounded-full bg-red-700  h-50 w-50 absolute'>
                  <Image src={model} alt="model" width={600}   height={600} className=' relative bottom-15' />
                   </div>
             </div>
     </div>
     </div>
     </>
  )
}
