import classNames from 'classnames'
import React, { memo } from 'react'
import { TabsWrapper } from './style'

const SearchTabs = memo((props) => {

  const { currentTabIndex, setCurrentTabIndex, tabNames = [] } = props
  
  return (
    <TabsWrapper>
      {
        tabNames?.map((tab, index) => (
          <div className='tab-item' key={ tab } onClick={ e => setCurrentTabIndex(index) }>
            <span className={ classNames('item-txt', { active: currentTabIndex === index}) }>
              { tab }
            </span>
          </div>
        ))
      }
    </TabsWrapper>
  )
})

export default SearchTabs