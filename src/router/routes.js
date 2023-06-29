import { lazy } from 'react'
import Home from '@/views/Home'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: '首页',
    },
  },
  {
    path: '/login',
    name: 'login',
    component: lazy(() => import('@/views/Login.jsx')),
    meta: {
      title: '登录',
    },
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: lazy(() => import('@/views/Detail.jsx')),
    meta: {
      title: '新闻详情',
    },
  },
]

export default routes
