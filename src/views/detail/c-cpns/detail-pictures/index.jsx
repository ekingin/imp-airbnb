import React, { memo, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { PictruesWrapper } from './style'
import PictruesBrowser from '@/base-ui/pictrues-browser'

const DetailPictures = memo(() => {

  const { roomDetail } = useSelector((state) => ({
    roomDetail: state.detail.roomDetail
  }))
  const [ showPicBrowser, setShowPicBrowser ] = useState(true)

  useEffect(() => {
  })

  const isShowPicBrowser = (isShow = true) => {
    setShowPicBrowser(isShow)
  }

  return (
    <PictruesWrapper>
      <div className='left'>
        <div className='item'>
          <img src={ roomDetail?.picture_urls?.[0] } alt='' />
          <div className='cover'></div>
        </div>
      </div>
      <div className='right'>
        {
          roomDetail?.picture_urls?.slice(1, 5)?.map(picItem => (
            <div className='item' key={ picItem }>
              <img src={ picItem } alt="" />
              <div className='cover'></div>
            </div>
          ))
        }
      </div>
      <div className='more-btn' onClick={ isShowPicBrowser }>查看照片</div>
      {
        showPicBrowser && (
          <PictruesBrowser
            pictureUrls={ roomDetail.picture_urls }
            close={ isShowPicBrowser } 
          />
            
        )
      }
    </PictruesWrapper>
  )
})

export default DetailPictures