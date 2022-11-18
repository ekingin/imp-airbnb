import React, { memo, useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { SectionV2Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/section-tabs'
import SectionFooter from '@/components/section-footer'

const HomeSectionV2 = memo((props) => {
  const { infoData } = props
  
  const firstTab = Object.keys(infoData.dest_list)[0]
  const tabs = infoData?.dest_address?.map(item => item.name)
  const [ tabName, setTabName ] = useState(firstTab)
  const tabClick = useCallback((tabName) => {
    setTabName(tabName)
  }, [])
   

  return (
    <SectionV2Wrapper>
      <SectionHeader title={ infoData.title } subtitle={ infoData.subtitle } />
      <SectionTabs tabsData={ tabs } tabClick={ tabClick } />
      <SectionRooms roomDatas={ infoData?.dest_list?.[tabName] } itemWidth="33.33%" />
      <SectionFooter name={ tabName } />
    </SectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV2