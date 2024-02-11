import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './userSlice'
export const store = configureStore({
  reducer: cartSlice.reducer,
})
export default store