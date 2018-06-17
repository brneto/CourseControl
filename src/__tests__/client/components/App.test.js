import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router/immutable';
import { createBrowserHistory } from 'history';
import { getStore } from '../../../client/redux/store';
import App from '../../../client/components/App';

const history = createBrowserHistory();
const store = getStore(history);
const element = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(element, div);
  ReactDOM.unmountComponentAtNode(div);
});
