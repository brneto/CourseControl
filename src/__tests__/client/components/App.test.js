import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router/immutable';
import state from '../../../client/redux/store';
import App from '../../../client/components/App';

const element = (
  <Provider store={state.store}>
    <ConnectedRouter history={state.history}>
      <App />
    </ConnectedRouter>
  </Provider>
);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(element, div);
  ReactDOM.unmountComponentAtNode(div);
});
