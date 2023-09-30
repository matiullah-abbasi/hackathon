"use client";
import { useState } from "react";
import React from "react";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { Products } from "@/utils/mock";
import ProductCard from "../components/ProductCard";
import { StaticImageData } from "next/image";

function Productlist() {
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

  const productchecks = Products.slice(currentIndex, currentIndex + 3);

  return (
    <>
      <div className="flex flex-col items-center py-16 px-32 gap-4">
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-blue-600 text-2xl">
          Products
        </p>
        <h2 className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Check what we Have
        </h2>
      </div>

      <div className="relative ">
        <div className="flex items-center justify-center ">
          {productchecks.map((product) => (
            <div
              key={product.id}
              className="transition ease-in-out delay-150  hover:-translate-y-6 hover:scale-110  duration-300"
            >
              <ProductCard
                key={product.id}
                id={product.id}
                price={product.price}
                img={product.image as StaticImageData}
                title={product.name}
                discription={product.discription}
              />
            </div>
          ))}
        </div>

        <div className="   absolute top-[50%]  -translate-y-20 left-32 rounded-full p-2 bg-black text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>

        <div className="  absolute top-[50%]  -translate-y-20  right-8 -translate-x-24 rounded-full p-2 bg-black text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
      </div>
    </>
  );
}
export default Productlist;
