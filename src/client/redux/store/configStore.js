import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { routerMiddleware } from 'connected-react-router/immutable';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import reducerWithRouter from '../reducers';
import { watchSagas } from '../sagas';
import preloadedState from './preloadedState';

const isDevelpment = process.env.NODE_ENV !== 'production';

const configStore = (history) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [
    sagaMiddleware,
    thunkMiddleware,
    routerMiddleware(history),
  ];

  if (isDevelpment) {
    middlewares.push(createLogger({ stateTransformer: state => state.toJS() }));
  }

  const reducer = reducerWithRouter(history);
  //const persistedState = loadState();
  const enhancer = composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(reducer, preloadedState, enhancer);

  sagaMiddleware.run(watchSagas);
  return store;
};

export default configStore;
