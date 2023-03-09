import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getEntireRoomList } from '@/services'

const entireSlice = createSlice({
  name: 'entire',
  initialState: {
    currentPage: 0, // 当前页码
    roomList: [], // 房间列表
    totalCount: 0, // 总数据个数
    isLoading: false, // 是否显示蒙版
  },
  reducers: {
    changeCurrentPageAction(state, { payload }) {
      state.currentPage = payload
    },
    changeRoomListAction(state, { payload }) {
      state.roomList = payload
    },
    changeTotalCountAction(state, { payload }) {
      state.totalCount = payload
    },
    changeIsLoadingAction(state, { payload }) {
      state.currentPage = payload
    },
  },
})

export const fetchEntireRoomList = createAsyncThunk(
  'fetchEntireRoomList',
  async (page = 0, { dispatch }) => {
    // 修改当前页码
    dispatch(changeCurrentPageAction(page))
    // 发送网络请求，获取房屋列表
    dispatch(changeIsLoadingAction(true))
    const res = await getEntireRoomList(page * 20)
    dispatch(changeIsLoadingAction(false))
    // 修改房屋列表
    dispatch(changeRoomListAction(res.list))
    // 修改总页数
    dispatch(changeTotalCountAction(res.totalCount))
  }
)

export const {
  changeCurrentPageAction,
  changeRoomListAction,
  changeTotalCountAction,
  changeIsLoadingAction,
} = entireSlice.actions

export default entireSlice.reducer
