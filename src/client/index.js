import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import initialState from './redux/store/initialState';
import { getStore } from './redux/store';
import { loadCourses } from './redux/thunks/courseThunks';
import { loadAuthors } from './redux/thunks/authorThunks';
import { Routes } from './components/Routes';
import App from './components/App';
import { DevTools } from './redux/utils/DevTools';
import './index.scss';

async function renderApp() {
  const store = await getStore(initialState);
  store.dispatch(loadAuthors());
  store.dispatch(loadCourses());

  const app = (
    <div>
      <Provider store={store}>
        <App>
          <Routes />
        </App>
      </Provider>
      {process.env.NODE_ENV === 'development' && <DevTools store={store} />}
    </div>
  );

  ReactDOM.render(app, document.getElementById('root'));
}

renderApp();
