import { createSlice  } from '@reduxjs/toolkit'

const mainSlice = createSlice({
  name: 'main',
  initialState: {
    appHeaderConfig: {
      isFixed: false, // 是否固定定位
      isAlpha: false, // 是否透明
    }
  },
  reducers: {
    changeAppHeaderConfigAction(state, { payload }) {
      state.appHeaderConfig = payload
    }
  }
})

export const { changeAppHeaderConfigAction } = mainSlice.actions

export default mainSlice.reducer