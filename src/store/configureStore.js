import rootReducer from '../reducers'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import {
  applyMiddleware,
  compose,
  createStore
} from 'redux'

const sideEffect = {
  'COUNTER_INCREMENT': action => Object.assign(action, {payload: action.payload + 1}),
  'COUNTER_DOUBLE': action => Object.assign(action, {payload: action.payload + 2})
}

const logic = store => next => action => {
  return sideEffect.hasOwnProperty(action.type) ? next(sideEffect[action.type](action)) : next(action)
}

export default function configureStore (initialState = {}, history) {
  let middleware = applyMiddleware(thunk, routerMiddleware(history), logic)

  if (__DEBUG__) {
    const devTools = window.devToolsExtension
      ? window.devToolsExtension()
      : require('containers/DevTools').default.instrument()
    middleware = compose(middleware, devTools)
  }
  const store = middleware(createStore)(
    rootReducer(), initialState
  )

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index').default

      store.replaceReducer(nextRootReducer())
    })
  }
  return store
}
