import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState:{},
  reducers: {
    add: (state ,data) => {
      console.log(data)
      state.value = [...(state.value || []) ,data.payload] 
    },
    remove: (state) => {
      state.value = []
    },
  },
})

export const { add, remove } = cartSlice.actions
export default cartSlice