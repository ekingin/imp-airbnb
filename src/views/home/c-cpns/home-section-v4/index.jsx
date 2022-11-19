import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionV4Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionFooter from '@/components/section-footer'
import ScrollViewH from '@/base-ui/scroll-view-h'
import RoomItem from '@/components/room-item'

const HomeSectionV4 = memo((props) => {
  const { infoData } = props

  return (
    <SectionV4Wrapper>
      <SectionHeader title={ infoData.title } subtitle={ infoData.subtitle } />
      <div className='plus-list'>
        <ScrollViewH leftCtlOffset="8px" rightCtlOffset="-8px" >
          {
            infoData.list.map(item => (
              <RoomItem roomItem={ item } itemWidth="20%" key={ item.id } />
            ))
          }
        </ScrollViewH>
      </div>
      <SectionFooter name="plus"/>
    </SectionV4Wrapper>
  )
})

HomeSectionV4.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV4