import React from 'react';
import { render } from 'react-dom';
import { createBrowserHistory } from 'history';
import { configStore } from './redux/store';
import { loadCourses } from './redux/thunks/courseThunks';
import { loadAuthors } from './redux/thunks/authorThunks';
import ReduxApp from './components/ReduxApp';
import './index.scss';

const history = createBrowserHistory();
const store = configStore(history);

store.dispatch(loadAuthors());
store.dispatch(loadCourses());

const props = { store, history };
render(
  <ReduxApp {...props} />,
  document.getElementById('root')
);
