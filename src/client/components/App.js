import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCourses } from '../redux/thunks/courseThunks';
import { loadAuthors } from '../redux/thunks/authorThunks';
import { loadingSelector, locationSelector } from '../redux/selectors';
import { Routes } from '../router';
import { Header } from './commons';

//https://github.com/ReactTraining/react-router/
//blob/master/packages/react-router/docs/guides/blocked-updates.md
const mapStateToProps = state => ({
  loading: loadingSelector(state),
  location: locationSelector(state)
});

const mapDispatchToProps = {
  loadAuthors,
  loadCourses,
};

@connect(mapStateToProps, mapDispatchToProps)
class App extends Component {

  componentDidMount() {
    const { loadAuthors, loadCourses } = this.props;

    loadAuthors();
    loadCourses();
  }

  render() {
    const props = this.props;

    return (
      <div className="container-fluid">
        <Header {...props} />
        <Routes />
      </div>
    );
  }
}

export default App;
