import React, { memo } from 'react'
import IconLogo from '@/assets/svg/icon-logo'
import { LeftWrapper } from './style'

const HeaderLeft = memo(() => {
  return (
    <LeftWrapper>
      <a href='/' className='icon-logo' aria-label="爱彼迎主页">
        <IconLogo />
      </a>
    </LeftWrapper>
  )
})

export default HeaderLeft