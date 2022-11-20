import React, { memo, useEffect, useRef } from 'react'
import { IndicatorWrapper } from './style'

const Indicatore = memo((props) => {
  const { currentIndex = 0 } = props
  const contentRef = useRef() 

  useEffect(() => {
    // current element
    const currentEl = contentRef.current.children[currentIndex]
    const currentElOffset = currentEl.offsetLeft
    const currentElWidth = currentEl.clientWidth

    // indicator-content
    const cttClientWidth = contentRef.current.clientWidth
    const cttScrollWidth = contentRef.current.scrollWidth

    // compute moveDistance
    let moveDistance = currentElOffset + currentElWidth * 0.5 - cttClientWidth * 0.5
    // edge case
    const maxScrollDistance = cttScrollWidth - cttClientWidth
    if (moveDistance < 0) moveDistance = 0
    if (moveDistance > maxScrollDistance) moveDistance = maxScrollDistance

    // move action
    contentRef.current.style.transform = `translate(${-moveDistance}px)`
  }, [currentIndex])

  return (
    <IndicatorWrapper>
      <div className='indicator-content' ref={ contentRef }>
        {
          props.children
        }
      </div>
    </IndicatorWrapper>
  )
})

export default Indicatore