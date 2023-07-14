import React from 'react'
import {Input} from '../../components/ui/input'
import { Button } from '@/components/ui/button'
export default function Newsletter() {
  return (
    <>
    <section className='newsletter flex  flex-col justify-center items-center m-40'>
   <div className="relative">
         <span className="absolute inset-0 font-bold text-9xl leading-151 text-gray-100 z-[-1] justify-center flex">Newsletter</span>
         <h1 className=" scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl flex justify-center items-center">
         Subscribe Our Newsletter
         </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6 pb-6 flex justify-center">
            Get the latest information and promo directly
        </p>
        <div className='flex gap-2'>
           <Input className='border-solid border-black' type="text" placeholder="Input Email Address" />
           <Button className='bg-black text-white w-36'>Get Started</Button>
        </div>
    </div>

    </section>


  </>
  )
}
