import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { EntireWrapper } from './style'
import EntireFilter from './c-cpns/entire-filter'
import EntireRooms from './c-cpns/entire-rooms'
import EntirePagination from './c-cpns/entire-pagination'
import { changeIsFixedAction } from '@/store/modules/main'

const Entire = memo(() => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(changeIsFixedAction({ isFixed: true }))
  }, [dispatch])

  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms />
      <EntirePagination />
    </EntireWrapper>
  )
})

export default Entire