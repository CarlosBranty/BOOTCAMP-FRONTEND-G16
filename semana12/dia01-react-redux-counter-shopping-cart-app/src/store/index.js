

import { configureStore } from "@reduxjs/toolkit"

import counterReducer from '../store/couter'
import cartReducer from '../store/cart'

export const Store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer
  }
})