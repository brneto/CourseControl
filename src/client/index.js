import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { initialState, getStore } from './redux/store';
import { loadCourses } from './redux/thunks/courseThunks';
import { loadAuthors } from './redux/thunks/authorThunks';
import App from './components/App';
import { DevTools } from './redux/utils/DevTools';
import './index.scss';

const debug = process.env.NODE_ENV !== 'production';
const store = getStore(initialState);

store.dispatch(loadAuthors());
store.dispatch(loadCourses());

const app = (
  <div>
    <Provider store={store}>
      <App />
    </Provider>
    {debug && <DevTools store={store} />}
  </div>
);

ReactDOM.render(app, document.getElementById('root'));
