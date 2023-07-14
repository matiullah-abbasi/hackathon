import React from 'react'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'



function ProductCard(props:{
  title:string, 
  price:number,
  img:StaticImageData,
  category?:string,
  id:number,
  discription:string, 
  productdetail?:string,
  productcare?:string
  })
 {
  return (
    <>
    <Link href={`/products/${props.id}`}>
        <div >
        <Image src={props.img} height={400} width={380} alt="brushedsweatshirt" />
        <h3 className='text-lg font-semibold pt-3'>{props.title}</h3>
        <p className='text-xl font-semibold pt-3'>${props.price}</p>
        <p>{props.category}</p>
        <h3 className='text-lg font-semibold  text-slate-400'>{props.discription}</h3>
        <p>{props.productdetail}</p>
        <p>{props.productcare}</p>
    </div></Link>
</>
  )
}

export default ProductCard