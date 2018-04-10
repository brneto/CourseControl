import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { initialState as preloadedState } from './initialState';
import { reducers } from '../reducers';
import { watchSagas } from '../sagas';
import { DevTools } from '../utils/DevTools';

const getStore = history => {
  const sagaMiddleware = createSagaMiddleware();
  const routerMiddleware = createRouterMiddleware(history);
  const enhancer = compose(
    applyMiddleware(thunkMiddleware, sagaMiddleware, routerMiddleware),
    DevTools.instrument()
  );

  const store = createStore(reducers, preloadedState, enhancer);
  sagaMiddleware.run(watchSagas);

  return store;
};

export { getStore };
