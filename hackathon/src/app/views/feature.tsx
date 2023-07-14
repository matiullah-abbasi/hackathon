import React from 'react'
import Image from 'next/image'
import featureimage from 'public/featureimage.png'
import { Button } from '@/components/ui/button'
export default function Feature() {
  return (
    <section className='mt-16 '>
  {/* title */}
        <div className='flex justify-end px-6 pb-8 bg-gradient-to-b from-white to-gray-100 '>
            <h1 className="scroll-m-20 text-2xl font-extrabold  lg:text-4xl  items-center w-1/2 ">
             Unique and Authentic Vintage Designer Jewellery </h1>
        </div>
{/* content */}
        <div className=' grid grid-cols-2 justify-center item center bg-gray-100  px-4 py-4 '>
        {/*div class ledt  */}
         <div className="relative grid grid-cols-2 justify-center items-center w-3/4 ">
          
               <div className='absolute font-extrabold text-7xl leading-110 text-gray-700 opacity-10 z-10 w-3/4'>
               Different from other
                </div>
                  <div className='w-3/4 z-2'>
             <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Using Good Quality Materials
             </h3>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
            Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
                 </div>
                 <div className='w-3/4 z-2' >
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            100% Handmade Products
             </h3>
           <p className="leading-7 [&:not(:first-child)]:mt-6">
            Lorem ipsum dolor sit amt, consectetur adipiscing elit.
           </p>
                </div>
               <div className='w-3/4 z-2'>
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
           Modern Fashion Design
             </h3>
           <p className="leading-7 [&:not(:first-child)]:mt-6">
            Lorem ipsum dolor sit amt, consectetur adipiscing elit.
           </p>
              </div>
               <div className='w-3/4 z-2'>
           <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
           Discount for Bulk Orders
           </h3>
           <p className="leading-7 [&:not(:first-child)]:mt-6">
            Lorem ipsum dolor sit amt, consectetur adipiscing elit.
           </p>
              </div>
         </div>

         {/* div class right */}
        <div className='flex gap-2'>
        <Image src={featureimage} height={300} width={350} alt="featureimage " />
           <div className='flex flex-col justify-center items-center  '>
                 <p className="leading-7 [&:not(:first-child)]:mt-6 flex justify-center item">
            This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.
                 </p>
           <Button className='bg-black text-white'>See all Products</Button>
        </div>
        </div>
        </div>


    </section>
  )
}
