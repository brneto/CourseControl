import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import HomePage from '../components/home/HomePage';
import AboutPage from '../components/about/AboutPage';
import { AuthorsPage, AuthorForm } from '../components/author';
import { CoursesPage, CourseForm } from '../components/course';

const routes = {
  home: { path: '/', exact: true },
  about: { path: '/about' },
  authors: { path: '/authors' },
  author: { path: '/author/:id' },
  courses: { path: '/courses' },
  course: { path: '/course/:id' },
};

const Routes = () => (
  <div style={{ marginTop: '0.5em' }}>
    <Switch>
      <Route {...routes.home} component={HomePage} />
      <Route {...routes.about} component={AboutPage} />
      <Route {...routes.authors} component={AuthorsPage} />
      <Route {...routes.author} component={AuthorForm} />
      <Route {...routes.courses} component={CoursesPage} />
      <Route {...routes.course} component={CourseForm} />
    </Switch>
  </div>
);

const NavLinks = () => (
  <ul className="navbar-nav">
    <li className="nav-item">
    <NavLink
      exact
      className="nav-link"
      activeClassName="active"
      to={routes.home.path}>Home</NavLink>
    </li>
    <li className="nav-item">
    <NavLink
      className="nav-link"
      activeClassName="active"
      to={routes.courses.path}>Courses</NavLink>
    </li>
    <li className="nav-item">
    <NavLink
      className="nav-link"
      activeClassName="active"
      to={routes.authors.path}>Authors</NavLink>
    </li>
    <li className="nav-item">
    <NavLink
      className="nav-link"
      activeClassName="active"
      to={routes.about.path}>About</NavLink>
    </li>
  </ul>
);

export { Routes, NavLinks };
