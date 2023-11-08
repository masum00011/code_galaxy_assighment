import { configureStore } from '@reduxjs/toolkit'
import homeSlice from '../Pages/afterAuth/Home/homeSlice'
export const store = configureStore({
  reducer: {
    home: homeSlice,
  },
})