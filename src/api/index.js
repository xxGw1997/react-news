import http from './http'

// 查询今日新闻 & 轮播图信息
export const queryNewsLatest = () => http.get('/api/news_latest')

// 查询往日新闻信息
export const queryNewsBefore = (time) => {
  return http.get('/api/news_before', {
    params: { time },
  })
}

// 获取新闻详情
export const queryNewsInfo = (id) => {
  return http.get('/api/news_info', {
    params: { id },
  })
}

// 获取新闻点赞信息
export const queryStoryExtra = (id) => {
  return http.get('/api/story_extra', {
    params: { id },
  })
}
