import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router/immutable';
import { getStore } from './redux/store';
import { loadCourses } from './redux/thunks/courseThunks';
import { loadAuthors } from './redux/thunks/authorThunks';
import App from './components/App';
import './index.scss';

const debug = process.env.NODE_ENV !== 'production';
const history = createBrowserHistory();
const store = getStore(history, debug);
const ReduxApp = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);

store.dispatch(loadAuthors());
store.dispatch(loadCourses());

ReactDOM.render(
  <ReduxApp />,
  document.getElementById('root')
);
