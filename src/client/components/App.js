import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import { ConnectedRouter } from 'react-router-redux';
import { history, Routes } from '../routes';
import Header from './common/Header';

function mapStateToProps(state) {
  return {
    loading: state.get('ajaxCallsInProgress') > 0
  };
}

@hot(module)
@connect(mapStateToProps)
class App extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired
  };

  render() {
    const { loading } = this.props;
    return (
      <ConnectedRouter history={history}>
        <div className="container-fluid">
          <Header loading={loading} />
          <Routes />
        </div>
      </ConnectedRouter>
    );
  }
}

export default App;
