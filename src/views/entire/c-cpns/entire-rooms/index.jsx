import React, { memo, useCallback, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RoomsWrapper } from './style'
import RoomItem from '@/components/room-item'
import { fetchEntireRoomList } from '@/store/modules/entire/actionCreators'
import { changeRoomDetailAction } from '@/store/modules/detail'

const EntireRooms = memo((props) => {
  // 获取store中的数据
  const { roomList, totalCount, isLoading } = useSelector((state) => ({
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount,
    isLoading: state.entire.isLoading
  }), shallowEqual)

  // 发生网络请求
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchEntireRoomList())
  }, [dispatch])

  const navigate = useNavigate()
  const navigateToDetial = useCallback((roomItem) => {
    // 把当前房屋详情对象保存到store中国
    dispatch(changeRoomDetailAction(roomItem))
    navigate("/detail")
  }, [dispatch, navigate])

  return (
    <RoomsWrapper>
      <h2 className='title'>{ totalCount }多处住宿</h2>
      <div className='room-list'>
        {
          roomList?.map(room => (
            <RoomItem 
              roomItem={ room } 
              itemWidth="20%" 
              key={ room._id }
              itemClick={ navigateToDetial }
            />
          ))
        }
      </div>
      { isLoading && <div className='room-list-cover'></div> }
    </RoomsWrapper>
  )
})

export default EntireRooms