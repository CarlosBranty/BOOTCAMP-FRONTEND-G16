import { createSlice } from "@reduxjs/toolkit";
export const  cartSlice = createSlice({
    name: 'cart',
    initialState: [
    //     {id: 1, name: 'Producto 1', price: 100, quantity: 1},
    // {id: 1, name: 'Producto 1', price: 100, quantity: 1}
],
    reducers:{
        addToCart: (state, action) => {
            // console.log('addto cart')
            const newProduct = action.payload;


            const productCartIndex = state.findIndex(item => item.id === newProduct.id)
            
            if(productCartIndex >= 0){
                const newState = state.map(product => {
                    if(product.id === newProduct.id){
                        return {...product, quantity: product.quantity + 1}
                    }
                    return product
                
                })
                return newState;
            }
            
            return [...state, {...newProduct,quantity:1}]

        },
        removeToCart: (state, action) => {
            // console.log('remove to cart')
            const productId = action.payload;
            return state.filter(product => product.id !== productId)
        },
        clearAll: (state) => {
            console.log('clear all the cart')
        }

    }
})
export default cartSlice.reducer; // exportando al estado inicial y a los reducers del slice
export const { addToCart, removeToCart, clearAll } = cartSlice.actions; // exportando los actions del slice