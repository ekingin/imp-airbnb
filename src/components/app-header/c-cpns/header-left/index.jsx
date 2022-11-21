import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { LeftWrapper } from './style'
import IconLogo from '@/assets/svg/icon-logo'

const HeaderLeft = memo(() => {

  const navigate = useNavigate()
  const navigateToHome = () => {
    navigate('/home')
  }

  return (
    <LeftWrapper>
      <div className='icon-logo' aria-label="爱彼迎主页" onClick={ navigateToHome }>
        <IconLogo />
      </div>
    </LeftWrapper>
  )
})

export default HeaderLeft