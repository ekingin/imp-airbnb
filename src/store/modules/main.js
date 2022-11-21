import { createSlice  } from '@reduxjs/toolkit'

const mainSlice = createSlice({
  name: 'main',
  initialState: {
    appHeaderConfig: {
      isFixed: false
    }
  },
  reducers: {
    changeIsFixedAction(state, { payload }) {
      state.appHeaderConfig = payload
    }
  }
})

export const { changeIsFixedAction } = mainSlice.actions

export default mainSlice.reducer