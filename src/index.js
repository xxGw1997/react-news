import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
/* Rem */
import 'lib-flexible'
import './index.scss'

/* Redux */
import { Provider } from 'react-redux'
import store from '@/store'

import { ConfigProvider } from 'antd-mobile'
import zhCN from 'antd-mobile/es/locales/zh-CN'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ConfigProvider locale={zhCN}>
    <Provider store={store}>
      <App />
    </Provider>
  </ConfigProvider>
)
