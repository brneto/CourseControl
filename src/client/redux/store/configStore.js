import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  connectRouter,
  routerMiddleware
} from 'connected-react-router/immutable';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { initialState } from './initialState';
import { reducers } from '../reducers';
import { watchSagas } from '../sagas';

const logger = createLogger({
  stateTransformer: state => state.toJS()
});

const getStore = (history, debug) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [
    routerMiddleware(history),
    thunkMiddleware,
    sagaMiddleware
  ];

  let createEnhancedStore;
  if (debug) {
    middlewares.push(logger);
    createEnhancedStore =
      composeWithDevTools(applyMiddleware(...middlewares))(createStore);
  } else {
    createEnhancedStore =
      compose(applyMiddleware(...middlewares))(createStore);
  }

  const rootReducer = connectRouter(history)(reducers);
  const store = createEnhancedStore(rootReducer, initialState);

  sagaMiddleware.run(watchSagas);
  return store;
};

export { getStore };
