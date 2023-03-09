import { configureStore } from '@reduxjs/toolkit'
import mainSlice from './modules/main'
import homeSlice from './modules/home'
import entireSlice from './modules/entire'
import detailSlice from './modules/detail'

const isDevelopment = process.env.NODE_ENV === 'development'
const store = configureStore({
  reducer: {
    home: homeSlice,
    entire: entireSlice,
    detail: detailSlice,
    main: mainSlice,
  },
  devTools: isDevelopment,
})

export default store