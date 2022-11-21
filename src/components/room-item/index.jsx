import PropTypes from 'prop-types'
import classNames from 'classnames'
import React, { memo, useRef, useState } from 'react'
import { ItemWrapper } from './style'
import { Carousel } from 'antd'
import Rating from '@mui/material/Rating'
import IconLeftArrow from '@/assets/svg/icon-left-arrow'
import IconRightArrow from '@/assets/svg/icon-right-arrow'
import Indicator from '@/base-ui/indicator'

const RoomItem = memo((props) => {
  const { roomItem, itemWidth = "25%", itemClick} = props
  const carouselRef = useRef()

  const [ currentIndex, setCurrentIndex ] = useState(0)
  const controlerClickHandle = (event, isRight) => {
    event.stopPropagation()
    // 切换图片
    isRight ? carouselRef.current.next() : carouselRef.current.prev()
    // 计算 currentIndex
    const len = roomItem.picture_urls?.length
    let newIndex = isRight ? currentIndex + 1 : currentIndex - 1
    if (newIndex >= len) newIndex = 0
    if (newIndex < 0) newIndex = len -1
    setCurrentIndex(newIndex)
  }

  const roomClickHandle = () => {
    itemClick && itemClick(roomItem)
  }

  const SinglePicture = (
    <div className='cover'>
      <img src={ roomItem?.picture_url } alt="" />
    </div>
  )
  const CarouselPictrue = (
    <div className='slider'>
      {/* 自定义指示器 */}
      <div className='indicator'>
        <Indicator currentIndex={ currentIndex }>
          {
            roomItem?.picture_urls?.map((item, index) => (
              <div className='dot-wrap' key={ item }>
                <div className={ classNames("dot", 
                  { 
                    active: currentIndex === index,
                    "active-sibing-two": (currentIndex === index - 2) ||
                                         (currentIndex === index - 1) ||
                                         (currentIndex === index + 1) ||
                                         (currentIndex === index + 2)
                   }) 
                }></div>
              </div>
            ))
          }
        </Indicator>
      </div>
      {/* 自定义控制器 */}
      <div className='controler'>
        <div className='item left' onClick={ e => controlerClickHandle(e, false) }>
          <IconLeftArrow width={ 24 } height={ 24 } />
        </div>
        <div className='item right' onClick={ e => controlerClickHandle(e, true) }>
          <IconRightArrow width={ 24 } height={ 24 } />
        </div>
      </div>
      {/* 轮播图 */}
      <Carousel dots={ false } ref={ carouselRef }>
        {
          roomItem?.picture_urls?.map(picItem => (
            <div className='cover' key={ picItem }>
              <img src={ picItem } alt="" />
            </div>
          ))
        }
      </Carousel>
    </div>
  )

  return (
    <ItemWrapper 
      verifyTextColor={ roomItem?.verify_info?.text_color ?? "#39576A" }
      itemWidth={ itemWidth }
      onClick={ roomClickHandle }
    >
      <div className='inner'>
        { roomItem.picture_urls ? CarouselPictrue : SinglePicture }
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