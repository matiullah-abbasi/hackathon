import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartState {
 
  cartItems: Array<any>;
  totalAmount: number;
  totalQuantity: number;
  addedToCartItems: Array<any>;   

}

const initialState: CartState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
  addedToCartItems: [], // Initialize the array to empty
 
};


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{ product: { id: number; name: string; price: number }; quantity: number }>) => {
      const { product, quantity } = action.payload;
      const existingProduct = state.cartItems.find((item) => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        const updatedProduct = { ...product, quantity };
        state.cartItems.push(updatedProduct);
        state.addedToCartItems.push(updatedProduct);
      }

      state.totalQuantity += quantity;
      state.totalAmount += product.price * quantity;
    },


    removeFromCart: (
      state,
      action: PayloadAction<{ product: { id: number; name: string; price: number }; quantity: number }>
    ) =>
     {
      const { product, quantity } = action.payload;
      const existingProduct = state.cartItems.find((item) => item.id === product.id);
      
      if (existingProduct) 
      {
        existingProduct.quantity = quantity-1;     
      }
      
    
      state.totalQuantity = Math.max(state.totalQuantity - quantity, 0);
      state.totalAmount = Math.max(state.totalAmount - product.price * quantity, 0);
      }
}})

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;