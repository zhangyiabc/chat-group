import React from 'react'
import { Provider } from 'mobx-react'
import Layout from './Layout/index'
import store from './stores/index'

import './App.css'

function App() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  )
}

export default App
