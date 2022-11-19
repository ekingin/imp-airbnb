import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { TabsWrapper } from './style'
import classNames from 'classnames'
import ScrollViewH from '@/base-ui/scroll-view-h'

const SectionTabs = memo((props) => {
  const { tabsData = [], tabClick } = props
  const [ currenIndex, setCurrentIndex ] = useState(0)

  const tabClickHandle = (tab, index) => {
    setCurrentIndex(index)
    tabClick(tab)
  }

  return (
    <TabsWrapper>
      <ScrollViewH>
        {
          tabsData?.map((tab, index) => (
            <div 
              className={ classNames("tabs-item", { active: currenIndex === index }) } 
              key={ index }
              onClick={ e => tabClickHandle(tab, index) }
            >
              { tab }
            </div>
          ))
        }
      </ScrollViewH>
    </TabsWrapper>
  )
})

SectionTabs.propTypes = {
  tabsData: PropTypes.array
}

export default SectionTabs