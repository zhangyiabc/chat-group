import React, { Suspense, useEffect } from 'react'
import { Route, Routes, redirect, BrowserRouter } from 'react-router-dom' 

import routes, { RouteItem } from '../router/index'
import { Spin } from 'antd'
import { observer } from 'mobx-react-lite'

import { useStores } from '../stores/index'
import styles from './index.module.scss'


function Layout (){
  const { commonStore } = useStores()
  const { animating } = commonStore
  
  return <Spin spinning={animating}>
    <main className={styles.mainContainer}>
      <Suspense fallback={null}>
        <BrowserRouter>
          <Routes>
            {
              routes.map((element: RouteItem, index) => {
                return <Route key={index} path={element.path}  element={
                  <element.component key={element.path}/>
                }/>
              })
            }
          </Routes>
        </BrowserRouter>
      </Suspense>
    </main>
  </Spin>
}

export default observer(Layout)
