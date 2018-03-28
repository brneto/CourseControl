import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage';
import AuthorsPage from './components/author/AuthorsPage';
import ManageAuthorPage from './components/author/ManageAuthorPage';

const NavLinks = () => (
  <ul className="navbar-nav">
    <li className="nav-item">
    <NavLink
      exact
      className="nav-link"
      activeClassName="active"
      to="/">Home</NavLink>
    </li>
    <li className="nav-item">
    <NavLink
      className="nav-link"
      activeClassName="active"
      to="/courses">Courses</NavLink>
    </li>
    <li className="nav-item">
    <NavLink
      className="nav-link"
      activeClassName="active"
      to="/authors">Authors</NavLink>
    </li>
    <li className="nav-item">
    <NavLink
      className="nav-link"
      activeClassName="active"
      to="/about">About</NavLink>
    </li>
  </ul>
);

const Routes = () => (
  <div style={{ marginTop: '0.5em' }}>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/courses" component={CoursesPage} />
      <Route path="/authors" component={AuthorsPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/course/:id" component={ManageCoursePage} />
      <Route path="/course" component={ManageCoursePage} />
      <Route path="/author/:id" component={ManageAuthorPage} />
      <Route path="/author" component={ManageAuthorPage} />
    </Switch>
  </div>
);

export { NavLinks, Routes };
