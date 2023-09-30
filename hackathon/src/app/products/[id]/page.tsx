"use client";
import Quantity from "@/app/components/quantity";
import { Products } from "@/utils/mock";
import Image from "next/image";
import AddToCart from "@/app/components/AddToCart";
const getProductsDetail = (id: number | string) => {
  return Products.filter((product) => product.id == id);
};

const sizes = ["xs", "sm", "md", "lg", "xl"];

export default function Page({ params }: { params: { id: string } }) {
  const result = getProductsDetail(params.id);

  return (
    <div className="pb-16">
      <div className="flex  flex-wrap py-10 mt-16">
        {result.map((product) => (
          <div key={product.id} className="flex justify-between gap-6 pl-20">
            <div>
              <Image src={product.image} alt={product.name} height={100} />
            </div>

            <div>
              <Image
                src={product.image}
                alt={product.name}
                height={400}
                width={500}
              />
            </div>
            <div className="pt-6">
              <div>
                <h1 className="   pb-4  text-2*1">{product.name}</h1>
                <h2 className="text-gray-400 font-semibold text-base pb-4">
                  {product.discription}
                </h2>
              </div>

              <div>
                <h3 className="text-xs mt-4 font-semibold pb-4">SELECT SIZE</h3>
              </div>

              <div className="flex  gap-x-4 pb-4">
                {sizes.map((item) => {
                  return (
                    <div
                      key={item}
                      className="h-6 w-6 rounded-full border hover:shadow-xl duration-300 mt-2 flex justify-center items-center"
                    >
                      <span className="text-sm font-semibold text-center text-gray-600">
                        {item}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div>
                <div className="flex items-end gap-x-14">
                  <Quantity id={product.id} check={true} />
                  <h2 className="text-3xl">${product.price.toFixed(2)}</h2>
                </div>
              </div>

              <div className=" gap-x-4 items-center mt-6 flex"></div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <span className="absolute  font-bold text-7xl  text-gray-100 z-[-1] ">
          OVERVIEW
        </span>
        <h1 className="  pt-5 font-bold ">Product Information</h1>
      </div>

      {result.map((product) => (
        <>
          <div
            key={product.id}
            className="flex gap-20 items-start mt-10 border-t border-black gap-x-36 "
          >
            <span className="text-s mt-4 font-semibold pt-4 ">
              Product Detail:
            </span>
            <p className="text-sm text-gray-400 pt-4 flex-1">
              {product.productdetail}
            </p>
          </div>

          <div className="flex gap-x-40 mt-10 items-start">
            <h4 className="text-s mt-4 font-semibold">Product Care:</h4>
            <ul className="list-disc list-inside">
              {product.productcare.map((item) => (
                <li key={item} className="text-sm text-gray-600">
                  ` {item}
                </li>
              ))}
            </ul>
          </div>
        </>
      ))}
    </div>
  );
}
