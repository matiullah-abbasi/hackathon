"use client"
import React, { useState } from 'react';
import AddToCart from './AddToCart';
import { Products } from "@/utils/mock"
import { Button } from '@/components/ui/button';
import { useDispatch,useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { cartActions } from '@/store/slice/cartslice';
 
const getProductsDetail=(id:number|string)=>
   {
    return Products.filter((product)=>product.id==id);
   }



function Quantity(props:{id:number;check:boolean}) 
{
   const result=getProductsDetail(props.id);
   const [num, setNum] = useState(1);
   const dispatch = useDispatch();
   const cartQuantity = useSelector((state: RootState) => state.cart.totalQuantity);
  
   const decrement = () => {
        setNum((prevNum) => {
          const newNum = prevNum <= 1 ? 1 : prevNum - 1;
          return newNum;
        });
        dispatch(cartActions.removeFromCart({ product: result[0], quantity: 1 }));
      };
    
      const increment = () => {
        setNum((prevNum) => {
          const newNum = prevNum + 1;
          return newNum;
        });
        dispatch(cartActions.addToCart({ product: result[0], quantity: 1 }))
      } 


  return (
    <div >
      {
         props.check ? (
           <>         
       <div className='flex items-end  '>
         <div>
            <h3 className="">Quantity:</h3>
          </div>
       
       <div className='flex  items-center pl-5'>
        <Button className='bg-white text-black'>
            <div className='border rounded-full h-5 w-5 center'    onClick={() => { setNum(num <= 1 ? 1 : num - 1);
            }}
            >
           -
        </div>
      </Button>

      <span>{num}</span>

      <Button className='bg-white text-black '>
        <div
          className='border rounded-full h-5 w-5 center'
          onClick={() => {
            setNum(num + 1);
          }}
        >
          +
        </div>
        </Button>
      </div>
      </div>
      <div className='flex '>
      {
       result.map((product) => (
        <AddToCart key={product.id} product={product} num={num} check={props.check}/>
         ))
      
      }
        </div>
        </>
         ):(<>
                      <Button className="bg-white text-black" onClick={decrement}>
                         <div className="border rounded-full h-5 w-5 center">-</div>
                       </Button>
          
                     <span>{cartQuantity}</span>
          
                       <Button className="bg-white text-black" onClick={increment}>
                         <div className="border rounded-full h-5 w-5 center">+</div>
                       </Button>
                     </>
                   )
                  }
    </div>
  );
}

export default Quantity;
