import { configureStore } from '@reduxjs/toolkit'
import { cartReducer } from './cart'
import { userReducer } from './user'
import { productsReducer } from './products'

export default configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    query: productsReducer  
  },
})
