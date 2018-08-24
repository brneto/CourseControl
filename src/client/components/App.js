import React from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import { loadingSelector, locationSelector } from '../redux/selectors';
import { Routes } from './router';
import { Header } from './commons';

//https://github.com/ReactTraining/react-router/
//blob/master/packages/react-router/docs/guides/blocked-updates.md
const mapStateToProps = state => ({
  loading: loadingSelector(state),
  location: locationSelector(state)
});

const App = props => (
  <div className="container-fluid">
    <Header {...props} />
    <Routes />
  </div>
);

const connectedApp = connect(mapStateToProps)(App);
export default hot(module)(connectedApp);
