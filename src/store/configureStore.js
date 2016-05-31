import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import {
  applyMiddleware,
  compose,
  createStore
} from 'redux';

export default function configureStore (initialState = {}, history) {
  let middleware = applyMiddleware(thunk, routerMiddleware(history));

  if (__DEBUG__) {
    const devTools = window.devToolsExtension
      ? window.devToolsExtension()
      : require('containers/DevTools').default.instrument();
    middleware = compose(middleware, devTools);
  }
  const store = middleware(createStore)(
    rootReducer(), initialState
  );

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index').default;

      store.replaceReducer(nextRootReducer());
    });
  }
  return store;
}
