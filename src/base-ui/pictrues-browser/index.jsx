import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { BrowserWrapper } from './style'
import IconClose from '@/assets/svg/icon-close'
import IconLeftArrow from '@/assets/svg/icon-left-arrow'
import IconRightArrow from '@/assets/svg/icon-right-arrow'
import IconTriangleBottom from '@/assets/svg/icon-triangle-bottom'
import IconTriangleTop from '@/assets/svg/icon-triangle-top'
import Indicator from '@/base-ui/indicator'
import classNames from 'classnames'

const PictruesBrowser = memo((props) => {

  const { pictureUrls, close } = props
  const [ currentIndex, setCurrentIndex ] = useState(0)
  const [ isNext, setIsNext ] = useState(true)
  const [ showPreview, setShowPreview ] = useState(true)

  // 消除滚动条
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  })
  // 图片浏览器关闭
  const closePictruesBrowser = () => {
    close(false)
  }
  // 处理图片滚动
  const picSlideHandle = (isRight = true) => {
    setIsNext(isRight)
    let newIndex = isRight ? currentIndex + 1 : currentIndex - 1
    const len = pictureUrls.length
    if (newIndex >= len) newIndex = 0
    if (newIndex < 0) newIndex = len - 1
    setCurrentIndex(newIndex)
  } 
  const showPreviewHandle = () => {
    setShowPreview(!showPreview)
  }

  return (
    <BrowserWrapper isNext={ isNext } showPreview={ showPreview }>
      <div className='top'>
        <div className='close-btn' onClick={ closePictruesBrowser }>
          <IconClose />
        </div>
      </div>
      <div className='slider'>
        <div className='controler'>
          <div className='btn left' onClick={ e => picSlideHandle(false) }>
            <IconLeftArrow width={77} height={77} />
          </div>
          <div className='btn right' onClick={ e => picSlideHandle(true) }>
            <IconRightArrow width={77} height={77} />
          </div>
        </div>
        <div className='pictures'>
          <SwitchTransition mode="out-in">
            <CSSTransition 
              key={pictureUrls[currentIndex]} 
              classNames="fade" 
              timeout={200}
            >
              <img src={ pictureUrls[currentIndex] } alt='' />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className='preview'>
        <div className='top'>
          <div className='pic-info'>
            {currentIndex+1}/{pictureUrls.length}: room apartment图片{currentIndex+1}
          </div>
          <div className='show-list-btn' onClick={ showPreviewHandle }>
            <span>{ showPreview ? '隐藏' : '显示' }照片列表</span>
            {
              showPreview ? <IconTriangleBottom /> : <IconTriangleTop />
            }
          </div>
        </div>
        <div className='preview-list'>
          <Indicator currentIndex={ currentIndex }>
            {
              pictureUrls?.map((url, index) => (
                <div className={ classNames('pic-item', { active: currentIndex === index }) } key={ url }>
                  <img src={ url } alt="" />
                </div>
              ))
            }
          </Indicator>
        </div>
        
      </div>
    </BrowserWrapper>
  )
})

PictruesBrowser.propTypes = {
  pictureUrls: PropTypes.array,
  close: PropTypes.func
}

export default PictruesBrowser