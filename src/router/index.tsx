import React, { lazy } from 'react'

const User = lazy(() => import('../Pages/User'))
const Home = lazy(() => import('../Pages/Home'))

export interface RouteItem {
  path: string
  component: React.LazyExoticComponent<any>
  name?: string
  exact?: boolean // 默认true

  // 隐藏当前层级的面包屑 默认false
  hideBreadcrumb?: boolean
  // 禁止面包屑跳转 默认false
  disalbeBreadcrumbJump?: boolean
}

const routes: RouteItem[] = [
  {
    path: '/user',
    component: User,
    name: '用户管理',
  },
  {
    path: '/home',
    component: Home,
    name: '首页',
  }
]

export default routes
