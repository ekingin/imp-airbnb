import React, { Fragment, memo } from 'react'
import { SectionWrapper } from './style'
import IconSearch from '@/assets/svg/icon-search'

const SearchSections = memo((props) => {

  const { tabConditions = [], isShowSearch } = props

  return (
    <SectionWrapper isShowSearch={ isShowSearch }>
      {
        tabConditions?.map((condition, index) => (
          <Fragment key={ condition.title }>
            <div className='condition-item'>
                <div className='title'>{ condition.title }</div>
                <div className='desc'>{ condition.desc }</div>
            </div>
            { index !== tabConditions.length - 1 && <div className='divider'></div> }
          </Fragment>
        ))
      }
      <div className='search-icon'>
        <IconSearch width="16" height="16" strokeWidth="4" />
      </div>
    </SectionWrapper>
  )
})

export default SearchSections