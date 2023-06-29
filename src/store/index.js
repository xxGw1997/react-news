import { createStore, applyMiddleware } from 'redux'
import reduxLogger from 'redux-logger'
import reduxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise'
import reducer from './reducer'

const middleware = [reduxThunk, reduxPromise],
  env = process.env.NODE_ENV

if (env === 'development') {
  middleware.push(reduxLogger)
}

const store = createStore(reducer, applyMiddleware(...middleware))

export default store
