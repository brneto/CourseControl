import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import { Routes } from '../routes';
import Header from './common/Header';

function mapStateToProps(state) {
  return {
    loading: state.get('ajaxCallsInProgress') > 0
  };
}

//https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/blocked-updates.md
@hot(module)
@withRouter
@connect(mapStateToProps)
class App extends Component {
  static propTypes = {
   loading: PropTypes.bool.isRequired
  };

  render() {
    const { loading } = this.props;
    return (
      <div className="container-fluid">
        <Header loading={loading} />
        <Routes />
      </div>
    );
  }
}

export default App;
