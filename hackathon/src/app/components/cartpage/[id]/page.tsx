"use client";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Image from "next/image";
import Quantity from "../../quantity";
import { Button } from "@/components/ui/button";

export default function CartItemsList({ params }: { params: { id: string } }) {
  const cartState = useSelector((state: RootState) => state.cart);
  const totalproduct = useSelector(
    (state: RootState) => state.cart.totalQuantity
  );
  const totalamount = useSelector((state: RootState) => state.cart.totalAmount);
  const addedToCartItems = cartState.addedToCartItems;

  return (
    <>
      <div className="pt-20 ">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Shopping Cart
        </h1>
      </div>
      <div className="flex justify-between">
        <div>
          {addedToCartItems.map((product) => (
            <div key={product.id} className="flex pt-10">
              <div>
                {
                  <Image
                    src={product.image}
                    alt={product.name}
                    height={200}
                    width={300}
                  />
                }
              </div>
              <div className="px-10 ">
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  {product.name}
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  {" "}
                  {product.discription}
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  Delivery Estimation
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  5 Working days
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  {" "}
                  {product.price}
                </p>
                <Quantity id={product.id} check={false} />
              </div>
            </div>
          ))}
        </div>

        <div className="pt-10 px-10 gap-6 bg-blue-50 flex flex-col justify-center  ">
          <h1 className="scroll-m-20 text-2xl font-bold tracking-tight lg:text-2xl">
            Order Summary
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Quantity {totalproduct}
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Sub Total {totalamount}
          </p>
          <Button className="mt-8">Process to checkout</Button>
        </div>
      </div>
    </>
  );
}
