import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { HomeWrapper } from './style'
import { isEmptyO } from '@/utils'
import { fetchHomeDataAction } from '@/store/modules/home'
import { changeIsFixedAction } from '@/store/modules/main'
import HomeBanner from './c-cpns/home-banner'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import HomeSectionV3 from './c-cpns/home-section-v3'
import HomeSectionV4 from './c-cpns/home-section-v4'

const Home = memo((props) => {
  
  // 从store中获取数据
  const { 
    goodPriceInfo, 
    highScoreInfo, 
    discountInfo,
    hotRecommendInfo,
    longforInfo,
    plusInfo,
  } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    hotRecommendInfo: state.home.hotRecommendInfo,
    longforInfo: state.home.longforInfo,
    plusInfo: state.home.plusInfo
  }), shallowEqual)
  
  // 派发事件，发送网络请求
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
    dispatch(changeIsFixedAction({ isFixed: false }))
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className='content'>
        { isEmptyO(discountInfo) && <HomeSectionV2 infoData={ discountInfo } /> }
        { isEmptyO(hotRecommendInfo) && <HomeSectionV2 infoData={ hotRecommendInfo } /> }
        { isEmptyO(longforInfo) && <HomeSectionV3 infoData={ longforInfo } /> }
        { isEmptyO(goodPriceInfo) && <HomeSectionV1 infoData={ goodPriceInfo } /> }
        { isEmptyO(highScoreInfo) && <HomeSectionV1 infoData={ highScoreInfo } /> }
        { isEmptyO(plusInfo) && <HomeSectionV4 infoData={ plusInfo } /> }
      </div>
    </HomeWrapper>
  )
})

export default Home