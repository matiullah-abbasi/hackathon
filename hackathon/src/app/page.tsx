import Image from 'next/image'
import Hero from './views/Hero'
import Productlist from './views/Productlist'
import Newsletter from './views/newsletter'
import Promotions from './views/promotions'
import Feature from './views/feature'
export default function Home() {
  return ( 
     <>
      <Hero/>
      <Promotions/> 
      <Productlist/>
      <Feature/>
      <Newsletter/>
    </>  
  )
}
