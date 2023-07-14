'use client'
import { store } from '@/store/store'
import { Provider } from 'react-redux'
import {Toaster} from 'react-hot-toast'
import CartItemsList from '@/app/components/cartpage/[id]/page'


const Providers=({children}:{children:React.ReactNode})=>{
    return(
 <Provider store={store}>
    {children}
  
   <Toaster/>
  </Provider>
    )
}
export default Providers