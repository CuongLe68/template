import { configureStore } from '@reduxjs/toolkit'
import sidebarReducer from './reducer/sidebarSlice'

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
  },
})