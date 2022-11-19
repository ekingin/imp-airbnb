import * as actionTypes from './constants'
import { getEntireRoomList } from '@/services/modules/entire'

/**
 * 同步操作：创建action
 */
export const changeCurrentPageAction = (currentPage) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  currentPage
})

export const changeRoomListAction = (roomList) => ({
  type: actionTypes.CHANGE_ROOM_LIST,
  roomList
})

export const changeTotalCountAction = (totalCount) => ({
  type: actionTypes.CHANGE_TOTAL_COUNT,
  totalCount
})

export const changeIsLoadingAction = (isLoading) => ({
  type: actionTypes.CHANGE_IS_LOADING,
  isLoading
})


/**
 * 异步操作：发生网络请求，然后派发action
 */
export const fetchEntireRoomList = (page = 0) => {
  return async (dispatch, getState) => {
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
}







