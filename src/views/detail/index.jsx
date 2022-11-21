import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import DetailInfos from './c-cpns/detail-infos'
import DetailPictures from './c-cpns/detail-pictures'
import { DetailWrapper } from './style'
import { changeIsFixedAction } from '@/store/modules/main'

const Detail = memo(() => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(changeIsFixedAction({ isFixed: false }))
  }, [dispatch])

  return (
    <DetailWrapper>
      <DetailPictures />
      <DetailInfos />
    </DetailWrapper>
  )
})

export default Detail