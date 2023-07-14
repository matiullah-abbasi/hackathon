"use client"
import { useState } from 'react';
import React from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { Products } from '@/utils/mock'

export default function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const prevSlide = () => {
    const x = currentIndex === 0;
    const y = x ? Products.length - 3 : currentIndex - 1;
    setCurrentIndex(y);
  };

    const nextSlide = () => {
    const x = currentIndex === Products.length - 3;
    const y = x ? 0 : currentIndex + 1;
    setCurrentIndex(y);
  };


  return (
 <>
    <div className=" group-hover:block  absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 rounded-full p-2 bg-black text-white cursor-pointer">
    <BsChevronCompactLeft onClick={prevSlide} size={30} />
 </div>

 <div className=" group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 rounded-full p-2 bg-black text-white cursor-pointer">
     <BsChevronCompactRight onClick={nextSlide} size={30} />
 </div>
 </>
  )
}
