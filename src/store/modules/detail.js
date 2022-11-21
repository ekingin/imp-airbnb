import { createSlice } from '@reduxjs/toolkit'

const detailSlice = createSlice({
  name: 'detail',
  initialState: {
    roomDetail: {}
  },
  reducers: {
    changeRoomDetailAction(state, { payload }) {
      state.roomDetail = payload
    }
  }
})

export const { changeRoomDetailAction } = detailSlice.actions

export default detailSlice.reducer