import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { RoomsWrapper } from './style'
import RoomItem from '@/components/room-item'

const SectionRooms = memo((props) => {
  const { roomDatas = [], itemWidth = "25%" } = props

  return (
    <RoomsWrapper>
      {
        roomDatas?.slice(0, 8)?.map(room => (
          <RoomItem roomItem={ room } itemWidth={ itemWidth } key={room.id} />
        ))
      }
    </RoomsWrapper>
  )
})

SectionRooms.propTypes = {
  roomDatas: PropTypes.array
}

export default SectionRooms