import React from 'react';
import { render } from 'react-dom';
import state from './redux/store';
import ReduxApp from './components/ReduxApp';
import './index.scss';

render(
  <ReduxApp {...state} />,
  document.getElementById('root')
);
