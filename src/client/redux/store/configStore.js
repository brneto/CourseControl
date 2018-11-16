import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { routerMiddleware } from 'connected-react-router/immutable';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import createRootReducer from '../reducers';
import { watchSagas } from '../sagas';
import preloadedState from './preloadedState';

const isDevelpment = process.env.NODE_ENV !== 'production';

const configStore = (history) => {
  //ensure that redux-saga is the last middleware in the call chain.
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [
    routerMiddleware(history),
    thunkMiddleware,
    sagaMiddleware,
  ];

  if (isDevelpment) {
    middlewares.push(createLogger({ stateTransformer: state => state.toJS() }));
  }

  const rootReducer = createRootReducer(history);
  //const persistedState = loadState();
  const enhancer = composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(rootReducer, preloadedState, enhancer);

  sagaMiddleware.run(watchSagas);
  return store;
};

export default configStore;
