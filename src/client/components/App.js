import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { hot } from 'react-hot-loader';
import { history } from './Routes';
import Header from './common/Header';

function mapStateToProps(state) {
  return {
    loading: state.get('ajaxCallsInProgress') > 0,
  };
}

@hot(module)
@connect(mapStateToProps)
class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
  };

  render() {
    const { children, loading } = this.props;
    return (
      <ConnectedRouter history={history}>
        <div className="container-fluid">
          <Header loading={loading} />
          {children}
        </div>
      </ConnectedRouter>
    );
  }
}

export default App;
