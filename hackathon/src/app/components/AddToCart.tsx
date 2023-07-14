 'use client'
import { Button } from "@/components/ui/button"
import { useDispatch } from 'react-redux'; 
import { cartActions } from "@/store/slice/cartslice"
import { toast } from "react-hot-toast"
import React,{useState} from 'react'


const AddToCart = ({ product, num,check}: { product: { id: number; name: string; price: number }; num: number;check:boolean }) => 
{
      
    const dispatch = useDispatch()
    const addItem = () => {
    dispatch(cartActions.addToCart({ product, quantity: num }))
     toast.success("Product added to cart")
   }



  return( 
  <>
    
    {
    check ? (
        <div className="pt-8 flex justify-center">
          <Button onClick={addItem}>Add to Cart</Button>
        </div>
      ) : (
        <div className="pt-8 flex justify-center">
          <Button onClick={addItem}>Add  to  cart</Button>
        </div>
      )}
  </>
  )
}

export default AddToCart
