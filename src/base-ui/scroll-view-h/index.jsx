import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef, useState } from 'react'
import { ScrollWrapper } from './style'
import IconLeftArrow from '@/assets/svg/icon-left-arrow'
import IconRightArrow from '@/assets/svg/icon-right-arrow'

const ScrollViewH = memo((props) => {
  const { leftCtlOffset = "0px", rightCtlOffset = "0px" } = props
  const [ showLeft, setShowLeft ] = useState(false)
  const [ showRight, setShowRight ] = useState(true)
  const posIndexRef = useRef(0)
  const scrollContentRef = useRef()
  const hiddenDistance = useRef()
  console.log(leftCtlOffset, rightCtlOffset);
  
  // 是否显示右滚动按钮
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth // 元素内容宽度
    const clientWidth = scrollContentRef.current.clientWidth // 元素视口宽度
    hiddenDistance.current = scrollWidth - clientWidth
    setShowRight(hiddenDistance.current > 0) // 首次渲染时是否显示右滚按钮
  }, [props.children])

  // 滚动处理函数
  function scrollHandle(isRight) { 
    const newPosIndex = isRight ? posIndexRef.current + 1 : posIndexRef.current - 1
    const activeEl = scrollContentRef.current.children[newPosIndex]
    const acElOffestLeft = activeEl.offsetLeft
    posIndexRef.current = newPosIndex
    scrollContentRef.current.style.transform = `translate(-${ acElOffestLeft }px)`

    // 控制左右滚动按钮显示
    setShowRight(hiddenDistance.current > acElOffestLeft)
    setShowLeft(acElOffestLeft > 0)
  }

  return (
    <ScrollWrapper 
      leftCtlOffset={ leftCtlOffset } 
      rightCtlOffset={ rightCtlOffset }
    >
      { 
        showLeft && (
          <div className='controler left' onClick={ e => scrollHandle(false) }>
            <IconLeftArrow />
          </div>
        ) 
      }
      { 
        showRight && (
          <div className='controler right' onClick={ e => scrollHandle(true) }>
            <IconRightArrow />
          </div> 
        )
      }
      <div className='scroll'>
        <div className='scroll-content' ref={ scrollContentRef }>
          {
            props.children
          }
        </div>
      </div>
    </ScrollWrapper>
  )
})

ScrollViewH.propTypes = {
  leftCtlOffset: PropTypes.string,
  rightCtlOffset: PropTypes.string,
}

export default ScrollViewH