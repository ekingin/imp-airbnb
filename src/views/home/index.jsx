import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import HomeBanner from './c-cpns/home-banner'
import { HomeWrapper } from './style'
import { fetchHomeDataAction } from '@/store/modules/home'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import { isEmptyO } from '@/utils'

const Home = memo((props) => {
  
  // 从store中获取数据
  const { 
    goodPriceInfo, 
    highScoreInfo, 
    discountInfo,
    hotRecommendInfo,
  } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    hotRecommendInfo: state.home.hotRecommendInfo
  }), shallowEqual)
  
  // 派发事件，发送网络请求
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className='content'>
        { isEmptyO(discountInfo) && <HomeSectionV2 infoData={ discountInfo } /> }
        { isEmptyO(hotRecommendInfo) && <HomeSectionV2 infoData={ hotRecommendInfo } /> }
        { isEmptyO(goodPriceInfo) && <HomeSectionV1 infoData={ goodPriceInfo } /> }
        { isEmptyO(highScoreInfo) && <HomeSectionV1 infoData={ highScoreInfo } /> }
      </div>
    </HomeWrapper>
  )
})

export default Home