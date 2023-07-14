import React from 'react'
import promotion1 from "public/promotion1.png"
import promotion2 from "public/promotion 2.png"
import promotion3 from "public/promotion 3.png"

import Image from 'next/image'
export default function Promotions() {
  return (

  <>

         <div className='w-3/4  pt-20'>
                                <p className='text-blue-500 flex justify-center'>PROMOTIONS</p>
                                <h1 className='flex justify-center font-bold text-3xl'>
                                              Our Promotions Events  </h1>
        </div>



                <div className='flex w-full justify-between items-center'> 

                   <div className='w-3/4'>
                      <div className=' bg-gray-300  flex h-1/2 justify-between'>
                       <div className='flex flex-col justify-center items-center '>
                          <h3 className='font-bold text-2xl'>Get Up to <span>60%</span></h3>
                          <p>For the Summer season</p>
                        </div>
                        <div >
                         
                        <Image src={promotion1} alt="promotion1"   width={282}   height={218}/>
                           </div>
                      </div>
                     <div className='p-2'>
                    
                     </div>

                       <div className='pt-10 bg-gray-950  flex flex-col justify-center items-center h-56 text-white'>                     
                          <h3 className='font-bold text-4xl'>Get 30% Off</h3>
                          <p>USE PROMO CODE</p>
                       </div>
                   </div> 
                    
               <div className='flex px-4'>
                      <div className=' bg-red-300  h-full p-2'>
                       
                          <p>Flex Sweatshirt</p>
                          <span className='line-through '>
                            $100.00
                          </span>
                          <span className='font-bold'> $75.00</span>
                      
                          <Image src={promotion2} alt="promotion2"   width={250}   height={100}  /> 
                      </div>

                     

                     <div className='px-20'>
                         <div className=' bg-yellow-300  h-full p-2 '>
                       
                             <p>Flex Push button Bomber</p>
                            <span className='line-through'>
                            $225.00
                            </span>
                            <span className='font-bold'> $190.00</span>
                      
                          <Image src={promotion3} alt="promotion3"   width={250}   height={100}  /> 
                         </div>
                      </div>
                 </div>
               </div>
</> 
  )
}
