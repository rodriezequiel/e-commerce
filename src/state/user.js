import { createReducer, createAction } from '@reduxjs/toolkit'

const initialState = {}

export const getUser = createAction('getUser')

export const userReducer = createReducer(initialState, {
  [getUser]: (state, action) => action.payload
})
