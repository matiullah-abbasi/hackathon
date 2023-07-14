// import { useDispatch } from 'react-redux'; 
// import { cartActions } from "@/store/slice/cartslice"
// import { toast } from "react-hot-toast"
// import { Button } from '@/components/ui/button';

// const RemoveFromCart = ({ product, num}: { product: { id: number; name: string; price: number }; num: number; }) => 
//   {
//       const dispatch = useDispatch()
//       const removeItem = () => {
//       dispatch(cartActions.removeFromCart({ product, quantity: num }))
//        toast.success("Product removed from cart")
//       }
//     return(
//         <>
//         <Button className='bg-white text-black'>
//             <div className='border rounded-full h-5 w-5 center'    onClick={() => { setNum(num <= 1 ? 1 : num - 1);
//             }}
//             >
//            -
//         </div>
//       </Button>



//         </>
//     ) 
    
//     }