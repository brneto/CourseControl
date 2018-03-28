import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { history } from '../../routes';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import { initialState } from './initialState';
import combinedReducer from '../reducers';
import watchSagas from '../sagas';
import { DevTools } from '../utils/DevTools';

const debug = process.env.NODE_ENV !== 'production';
const sagaMiddleware = createSagaMiddleware();
const routerMiddleware = createRouterMiddleware(history);
const enhancer = compose(
  applyMiddleware(
    thunkMiddleware,
    sagaMiddleware,
    routerMiddleware,
  ),
  debug ? DevTools.instrument() : undefined,
);

const getStore = (preloadedState = initialState) => {
  const store = createStore(
    combinedReducer,
    preloadedState,
    enhancer,
  );
  sagaMiddleware.run(watchSagas);

  return store;
};

export { getStore };
