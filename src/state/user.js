import { createReducer, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {}

export const getUser = createAsyncThunk('getUser', (id, thunkAPI) => {
  // return axios
  //   .get()
  //   .then((res) => res.data)
  //   .then((allUsers) => allUsers)
  //   .catch((err) => console.log('error', err))
})

export const userReducer = createReducer(initialState, {
  [getUser.fulfilled]: (state, action) => action.payload,
})
