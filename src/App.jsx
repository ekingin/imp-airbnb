import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '@/router'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
import useScrollTop from '@/hooks/useScrollTop'

const App = memo(() => {

  // 当切换页面时，滚到顶部
  useScrollTop()

  return (
    <div className='app'>
      <AppHeader />
      <div>
        { useRoutes(routes) }
      </div>
      <AppFooter />
    </div>
  )
})

export default App