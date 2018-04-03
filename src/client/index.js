import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { getStore } from './redux/store';
import { loadCourses } from './redux/thunks/courseThunks';
import { loadAuthors } from './redux/thunks/authorThunks';
import { DevTools } from './redux/utils/DevTools';
import App from './components/App';
import './index.scss';

const debug = process.env.NODE_ENV !== 'production';
const history = createHistory();
const store = getStore(history);
const ReduxApp = () => (
  <>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
    {debug && <DevTools store={store} />}
  </>
);

store.dispatch(loadAuthors());
store.dispatch(loadCourses());
ReactDOM.render(<ReduxApp/>, document.getElementById('root'));
