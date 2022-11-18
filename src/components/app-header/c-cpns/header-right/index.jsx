import React, { memo, useEffect, useState } from 'react'
import { RightWrapper } from './style'
import IconLanguage from '@/assets/svg/icon-language'
import IconSelectMenu from '@/assets/svg/icon-select-menu'
import IconAvatar from '@/assets/svg/icon-avatar'

const HeaderRight = memo(() => {

  const [showPanel, setShowPanel] = useState(false)

  useEffect(() => {
    function menuClickHandle() {
      setShowPanel(false)
    }
    window.addEventListener("click", menuClickHandle, true)
    return () => {
      window.removeEventListener("click", menuClickHandle, true)
    }
  })
  const showMenuPanel = () => {
    setShowPanel(true)
  }

  return (
    <RightWrapper>
      <div className='btns'>
        <a href='/' className='btn'>
          <div>登录</div>
        </a>
        <a href='/'className='btn'>
          <div>注册</div>
        </a>
        <a href='/'className='btn'>
          <IconLanguage />
        </a>
      </div>
      <div className='profile' onClick={showMenuPanel}>
        <div className='icon-select-menu'>
          <IconSelectMenu />
        </div>
        <div className='icon-avatar'>
          <IconAvatar />
        </div>

        {
          showPanel && (
            <div className='select-menu-panel'>
              <div className='top'>
                <div className='item sign-up'>注册</div>
                <div className='item'>登录</div>
              </div>
              <div className='divider-line'></div>
              <div className='bottom'>
                <div className='item'>来爱彼迎发布房源</div>
                <div className='item'>开展体验</div>
                <div className='item'>帮助</div>
              </div>
            </div>
          )
        }
      </div>
    </RightWrapper>
  )
})

export default HeaderRight