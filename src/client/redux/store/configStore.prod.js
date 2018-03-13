import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { history } from '../../components/Routes';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import initialState from './initialState';
import combinedReducer from '../reducers';
import watchSagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const routerMiddleware = createRouterMiddleware(history);
const enhancer = compose(
  applyMiddleware(
    thunkMiddleware,
    sagaMiddleware,
    routerMiddleware,
  )
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
