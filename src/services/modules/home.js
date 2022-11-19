import ekRequest from '..'

// 获取数据：高性价比
export function getHomeGoodPriceData(){
  return ekRequest.get({ 
    url: "/home/goodprice"
  })
}

// 获取数据：高评分
export function getHomeHighScoreData() {
  return ekRequest.get({
    url: "/home/highscore"
  })
}

// 获取数据：折扣
export function getHomeDiscountData() {
  return ekRequest.get({
    url: "/home/discount"
  })
}

// 获取数据：热门推荐
export function getHomeHotRecommendData() {
  return ekRequest.get({
    url: "/home/hotrecommenddest"
  })
}

// 获取数据：向往城市
export function getHomeLongforData() {
  return ekRequest.get({
    url: "/home/longfor"
  })
}

// 获取数据：plus数据
export function getHomePlusData() {
  return ekRequest.get({
    url: "/home/plus"
  })
}