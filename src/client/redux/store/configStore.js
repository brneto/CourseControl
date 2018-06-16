import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  connectRouter as addRouterReducer,
  routerMiddleware as createRouterMiddleware
} from 'connected-react-router/immutable';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { initialState as preloadedState } from './initialState';
import { reducers } from '../reducers';
import { watchSagas } from '../sagas';

const getStore = history => {
  const rootReducer = addRouterReducer(history)(reducers);
  const routerMiddleware = createRouterMiddleware(history);
  const sagaMiddleware = createSagaMiddleware();
  const enhancer = composeWithDevTools(
    applyMiddleware(routerMiddleware, thunkMiddleware, sagaMiddleware)
  );
  const store = createStore(rootReducer, preloadedState, enhancer);

  sagaMiddleware.run(watchSagas);

  return store;
};

export { getStore };
