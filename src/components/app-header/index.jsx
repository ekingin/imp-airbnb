import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import classNames from 'classnames'
import { HeaderWrapper } from './style'
import HeaderCenter from './c-cpns/header-center'
import HeaderLeft from './c-cpns/header-left'
import HeaderRight from './c-cpns/header-right'

const AppHeader = memo(() => {
  
  const { appHeaderConfig } = useSelector((state) => ({
    appHeaderConfig: state.main.appHeaderConfig
  }))
  const { isFixed } = appHeaderConfig

  return (
    <HeaderWrapper className={ classNames({ fixed: isFixed }) }>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </HeaderWrapper>
  )
})

export default AppHeader