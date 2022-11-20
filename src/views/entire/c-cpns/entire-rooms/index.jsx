import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { RoomsWrapper } from './style'
import RoomItem from '@/components/room-item'
import { fetchEntireRoomList } from '@/store/modules/entire/actionCreators'

const EntireRooms = memo((props) => {
  console.log("rooms render");

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
            />
          ))
        }
      </div>
      { isLoading && <div className='room-list-cover'></div> }
    </RoomsWrapper>
  )
})

export default EntireRooms