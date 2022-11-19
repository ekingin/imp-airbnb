import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionV3Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import LongforItem from '@/components/longfor-item'
import ScrollViewH from '@/base-ui/scroll-view-h'

const HomeSectionV3 = memo((props) => {
  const { infoData } = props

  return (
    <SectionV3Wrapper>
      <SectionHeader title={ infoData.title } subtitle={ infoData.subtitle } />
      <div className='longfor-list'>
        <ScrollViewH leftCtlOffset="8px" rightCtlOffset="-8px" >
          {
            infoData.list.map(item => (
              <LongforItem roomItem={ item } itemWidth="20%" key={ item.city } />
            ))
          }
        </ScrollViewH>
      </div>
    </SectionV3Wrapper>
  )
})

HomeSectionV3.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV3