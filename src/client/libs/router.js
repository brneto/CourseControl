import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import HomePage from '../components/home/HomePage';
import AboutPage from '../components/about/AboutPage';
import { AuthorsPage, AuthorForm } from '../components/author';
import { CoursesPage, CourseForm } from '../components/course';

const routes = {
  home: { path: '/', exact: true },
  courses: { path: '/courses' },
  authors: { path: '/authors' },
  about: { path: '/about' },
  course: { path: '/course/:id' },
  author: { path: '/author/:id' }
};

const Routes = () => (
  <div style={{ marginTop: '0.5em' }}>
    <Switch>
      <Route {...routes.home} component={HomePage} />
      <Route {...routes.courses} component={CoursesPage} />
      <Route {...routes.authors} component={AuthorsPage} />
      <Route {...routes.about} component={AboutPage} />
      <Route {...routes.course} component={CourseForm} />
      <Route {...routes.author} component={AuthorForm} />
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
