import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { ItemWrapper } from './style'
import Rating from '@mui/material/Rating'

const RoomItem = memo((props) => {
  const { roomItem, itemWidth } = props

  return (
    <ItemWrapper 
      verifyTextColor={ roomItem?.verify_info?.text_color ?? "#39576A" }
      itemWidth={ itemWidth }
    >
      <div className='inner'>
        <div className='cover'>
          <img src={ roomItem?.picture_url } alt="" />
        </div>
        <div className='desc'>{ roomItem?.verify_info.messages.join(" · ") }</div>
        <div className='title'>{ roomItem?.name }</div>
        <div className='price'>¥{ roomItem?.price }/晚</div>
        <div className='score'>
          <Rating 
            name="score" 
            value={ roomItem?.star_rating ?? 5 } 
            precision={0.5} 
            readOnly 
            sx={{ fontSize: "12px", color: `${roomItem?.star_rating_color}` }}  
          />
          <span className='reviews-count'>{ roomItem?.reviews_count }</span>
          {
            roomItem.bottom_info && <span> · { roomItem?.bottom_info?.content }</span>
          }
        </div>
      </div> 
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
  roomItem: PropTypes.object
}

export default RoomItem