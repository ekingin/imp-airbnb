import React, { memo } from 'react'
import IconSearch from '@/assets/svg/icon-search'
import { BarWrapper } from './style'

const SearchBar = memo((props) => {
  const { searchBarClick } = props

  return (
    <BarWrapper className='search-bar' onClick={ e => searchBarClick(true) }>
      <div className='search-label'>搜索房源和体验</div>
      <div className='search-icon'>
        <IconSearch />
      </div>
    </BarWrapper>
  )
})

export default SearchBar