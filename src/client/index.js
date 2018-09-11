import React from 'react';
import { render } from 'react-dom';
import { createBrowserHistory } from 'history';
import { configStore } from './redux/store';
import ReduxApp from './components/ReduxApp';
import './index.scss';

const history = createBrowserHistory();
const store = configStore(history);
const props = { store, history };

render(
  <ReduxApp {...props} />,
  document.getElementById('root')
);
