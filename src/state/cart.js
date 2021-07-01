import {
  createReducer,
  createAsyncThunk,
  createAction,
  current,
} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {}

export const getCart = createAsyncThunk('getCart', (id, thunkAPI) => {
  const { user } = thunkAPI.getState()

  // if (user) {
  const userId = 1
  return axios
    .get(`http://localhost:3001/api/cart/${userId}`)
    .then((res) => res.data)
    .then((cart) => cart[0])
    .catch((err) => console.log('error', err))
  // }
})

export const addToCart = createAction('addToCart', (product, thunkAPI) => {
  return {
    payload: product,
    quantity: product.quantity || 0,
  }
})

export const cartReducer = createReducer(initialState, {
  [getCart.fulfilled]: (state, action) => action.payload,
  [addToCart]: (state, action) => {
    // let currentProds = state.Products

    state.Products.push(action.payload)
    return state
  },
})
