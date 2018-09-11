import React from 'react';
import { PropTypes } from 'prop-types';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router/immutable';
import App from './App';

const ReduxApp = ({ store, history }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);
ReduxApp.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default ReduxApp;
