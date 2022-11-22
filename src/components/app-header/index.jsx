import React, { memo, useRef, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import classNames from 'classnames'
import { HeaderWrapper } from './style'
import HeaderCenter from './c-cpns/header-center'
import HeaderLeft from './c-cpns/header-left'
import HeaderRight from './c-cpns/header-right'
import useScrollPosition from '@/hooks/useScrollPosition'
import { ThemeProvider } from 'styled-components'

const AppHeader = memo(() => {
  // 是否显示搜索栏
  const [ isShowSearch, setIsShowSearch ] = useState(false)

  // 在store中取出 AppHeader 的配置对象
  const { appHeaderConfig: { isFixed, isAlpha } } = useSelector((state) => ({
    appHeaderConfig: state.main.appHeaderConfig
  }), shallowEqual)
  console.log(isFixed);
  
  /**
   * 监听滚动
   * 1. 使用ref记录搜索栏显示前的位置
   * 2. 当显示搜索栏后，前后滚动的距离大于30，则隐藏搜索栏
   */
  const { scrollY } = useScrollPosition()
  const showSearchPosY = useRef(0)
  if (!isShowSearch) showSearchPosY.current = scrollY
  if (isShowSearch && Math.abs(scrollY - showSearchPosY.current) > 30) setIsShowSearch(false)

  // App header 是否透明
  const headerAlpha = isAlpha && scrollY === 0

  return (
    <ThemeProvider theme={{ headerAlpha }}>
      <HeaderWrapper className={ classNames({ fixed: isFixed }) } isShowSearch={ isShowSearch }>
        <div className='content'>
          <div className='main'>
            <HeaderLeft />
            <HeaderCenter isShowSearch={ headerAlpha || isShowSearch } searchBarClick={ setIsShowSearch } />
            <HeaderRight />
          </div>
          <div className='placeholder'></div>
        </div>
        {/* 遮盖层 */}
        { isShowSearch && <div className='cover' onClick={ e => setIsShowSearch(false) }></div> }
      </HeaderWrapper>
    </ThemeProvider>
  )
})

export default AppHeader