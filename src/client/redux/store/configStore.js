import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  connectRouter as addRouterReducer,
  routerMiddleware as createRouterMiddleware
} from 'connected-react-router/immutable';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { initialState } from './initialState';
import { reducers } from '../reducers';
import { watchSagas } from '../sagas';

const debug = process.env.NODE_ENV !== 'production';

const logger = createLogger({
  stateTransformer: state => state.toJS()
});

const getStore = history => {
  const routerMiddleware = createRouterMiddleware(history);
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [routerMiddleware, thunkMiddleware, sagaMiddleware];

  let createEnhancedStore;
  if (debug) {
    middlewares.push(logger);
    createEnhancedStore =
      composeWithDevTools(applyMiddleware(...middlewares))(createStore);
  } else {
    createEnhancedStore =
      compose(applyMiddleware(...middlewares))(createStore);
  }

  const rootReducer = addRouterReducer(history)(reducers);
  const store = createEnhancedStore(rootReducer, initialState);

  sagaMiddleware.run(watchSagas);
  return store;
};

export { getStore };
