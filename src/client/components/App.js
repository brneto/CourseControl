import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import { Routes } from './router';
import { Header } from './commons';

const mapStateToProps = state => ({
  loading: state.get('ajaxCallsInProgress') > 0
});

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
