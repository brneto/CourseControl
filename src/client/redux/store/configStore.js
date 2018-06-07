import { createStore, applyMiddleware, compose } from 'redux';
import {
  connectRouter as addRouterReducer,
  routerMiddleware as createRouterMiddleware
} from 'connected-react-router/immutable';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { initialState as preloadedState } from './initialState';
import { reducers } from '../reducers';
import { watchSagas } from '../sagas';
import { DevTools } from '../utils/DevTools';

const getStore = history => {
  const rootReducer = addRouterReducer(history)(reducers);
  const routerMiddleware = createRouterMiddleware(history);
  const sagaMiddleware = createSagaMiddleware();
  const enhancer = compose(
    applyMiddleware(routerMiddleware, thunkMiddleware, sagaMiddleware),
    DevTools.instrument()
  );
  const store = createStore(rootReducer, preloadedState, enhancer);

  sagaMiddleware.run(watchSagas);

  return store;
};

export { getStore };
