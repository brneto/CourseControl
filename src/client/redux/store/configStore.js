import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import {
  connectRouter,
  routerMiddleware
} from 'connected-react-router/immutable';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { reducers } from '../reducers';
import { watchSagas } from '../sagas';
import { initialState } from './initialState';

const getStore = (history, debug) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [
    routerMiddleware(history),
    thunkMiddleware,
    sagaMiddleware
  ];

  if (debug)
    middlewares.push(
      createLogger({
        stateTransformer: state => state.toJS()
      })
    );

  const createEnhancedStore = composeWithDevTools(
    applyMiddleware(...middlewares)
  )(createStore);
  const rootReducer = connectRouter(history)(reducers);
  const store = createEnhancedStore(rootReducer, initialState);

  sagaMiddleware.run(watchSagas);
  return store;
};

export { getStore };
