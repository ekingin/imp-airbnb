import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { 
  getHomeGoodPriceData, 
  getHomeHighScoreData, 
  getHomeDiscountData,
  getHomeHotRecommendData
} from '@/services'

// 使用 redux RTK 的方式创建 reducer
const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    hotRecommendInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload
    },
    changeHotRecommendAction(state, { payload }) {
      state.hotRecommendInfo = payload
    }
  },
})

// 异步操作，发送网络请求，拿到数据存入store
export const fetchHomeDataAction = createAsyncThunk("fetchHomeData", (payload, { dispatch }) => {
  getHomeGoodPriceData().then(res => {
    dispatch(changeGoodPriceInfoAction(res))
  })
  getHomeHighScoreData().then(res => {
    dispatch(changeHighScoreInfoAction(res))
  })
  getHomeDiscountData().then(res => {
    dispatch(changeDiscountInfoAction(res))
  })
  getHomeHotRecommendData().then(res => {
    dispatch(changeHotRecommendAction(res))
  })
})

export const { 
  changeGoodPriceInfoAction, 
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
  changeHotRecommendAction,
} = homeSlice.actions
export default homeSlice.reducer