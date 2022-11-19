import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { LongforWrapper } from './style'

const LongforItem = memo((props) => {

  const { roomItem, itemWidth } = props

  return (
    <LongforWrapper itemWidth={ itemWidth }>
      <div className='inner'>
        <div className='cover'>
          <img src={ roomItem.picture_url } alt="" />
        </div>
        <div className='cover-bg'></div>
        <div className="room-info">
          <div className="info-item city-name">{ roomItem.city }</div>
          <div className='info-item room-average-price'>均价 { roomItem.price }</div>
        </div>
      </div>
    </LongforWrapper>
  )
})

LongforItem.propTypes = {
  roomItem: PropTypes.object
}

export default LongforItem