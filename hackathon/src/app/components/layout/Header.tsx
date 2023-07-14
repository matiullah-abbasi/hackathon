"use client"
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store';
import { Badge } from "@/components/ui/badge"
import Logo from '/public/Logo.png'
import Image from "next/image";
import * as React from "react"
import Link from "next/link"
import { Input } from "@/components/ui/input"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { ShoppingCart } from "lucide-react"



export default  function NavigationMenuDemo() {
  const cartValue=useSelector((state:RootState)=>state.cart.totalQuantity);
  
  return (

    <nav className="bg-white flex justify-around   items-center pt-4 ">

               

      <div >
        <NavigationMenu >
        <NavigationMenuList>
             

        <div>
              <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <div>
                 <Image    src={Logo} alt="Logo" width={100}
                 height={100}  />
                
                 </div>

           
             </NavigationMenuLink> 
             </Link>
             </NavigationMenuItem>
             </div>
             

             
             <div>
              <NavigationMenuItem>
              <Link href="/category/Female" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
             Female
           
             </NavigationMenuLink> 
             </Link>
             </NavigationMenuItem>
             </div>
             
         <div>
             <NavigationMenuItem>
             <Link href="/category/Male" legacyBehavior passHref>
             <NavigationMenuLink className={navigationMenuTriggerStyle()}>
             Male
            </NavigationMenuLink> 
            </Link>
            </NavigationMenuItem>
        </div>
        
        <div>
            <NavigationMenuItem>
            <Link href="/category/Kids" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Kids
            </NavigationMenuLink> 
            </Link>
            </NavigationMenuItem>
        </div>
         
        <div>
            <NavigationMenuItem>
            <Link href="/products" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            All Products
            </NavigationMenuLink> 
            </Link>
            </NavigationMenuItem>
      </div>
   </NavigationMenuList>
   </NavigationMenu>
   </div>


  
            <div className="flex  items-center border border-gray-100 rounded-md  w-96">
                        <svg  xmlns=" http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
                        stroke="currentColor" strokeWidth="2" 
                        strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search">
                        <circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/>
                        </svg>
                        <Input type="text" placeholder="Search" className="border-none "/>
          </div>
      <Link href='/components/cartpage/cartproduct'>
           <div className="bg-gray-300 p-3 transition-all relative hover:scale-110 rounded-full ">
                       <Badge className="bg-red-500  p-0 absolute top-0 right-2 text-sm">{cartValue}</Badge>
                    <ShoppingCart/>
           </div>
           </Link>
    </nav>
    
  )
}

