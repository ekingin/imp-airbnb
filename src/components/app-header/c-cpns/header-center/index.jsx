import React, { memo, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { CenterWrapper } from './style'
import SearchTabs from './c-cpns/search-tabs'
import SearchSections from './c-cpns/search-sections'
import searchConditions from '@/assets/data/search-conditions'
import SearchBar from './c-cpns/search-bar'

const HeaderCenter = memo((props) => {

  const { isShowSearch, searchBarClick } = props

  const tabNames = searchConditions.map(item => item.title)
  const [ currentTabIndex, setCurrentTabIndex ] = useState(0)

  return (
    <CenterWrapper isShowSearch={ isShowSearch }>
      <CSSTransition
        in={!isShowSearch}
        classNames="bar"
        timeout={250}
        unmountOnExit={true}
      >
        <SearchBar searchBarClick={ searchBarClick } />
      </CSSTransition>
      <CSSTransition
        in={isShowSearch}
        classNames="tabs"
        timeout={250}
        unmountOnExit={true}
      >
        <div className='tabs-wrap'>
          <SearchTabs tabNames={ tabNames } currentTabIndex={ currentTabIndex } setCurrentTabIndex = { setCurrentTabIndex } />
          <div style={{ height: "80px" }}> 
            <SearchSections tabConditions={ searchConditions[currentTabIndex].searchInfos } isShowSearch={ isShowSearch } />
          </div>
        </div>
      </CSSTransition>
    </CenterWrapper>
  )
})

export default HeaderCenter