import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import { AuthorsPage, AuthorForm } from './components/author';
import { CoursesPage, CourseForm } from './components/course';

const routes = {
  home: { path: '/', exact: true, component: HomePage },
  courses: { path: '/courses', component: CoursesPage },
  authors: { path: '/authors', component: AuthorsPage },
  about: { path: '/about', component: AboutPage },
  courseCreate: { path: '/course', component: CourseForm },
  courseUpdate: { path: '/course/:id', component: CourseForm },
  authorCreate: { path: '/author', component: AuthorForm },
  authorUpdate: { path: '/author/:id', component: AuthorForm }
};

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

const Routes = () => (
  <div style={{ marginTop: '0.5em' }}>
    <Switch>
      <Route {...routes.home} />
      <Route {...routes.courses} />
      <Route {...routes.authors} />
      <Route {...routes.about} />
      <Route {...routes.courseUpdate} />
      <Route {...routes.courseCreate} />
      <Route {...routes.authorUpdate} />
      <Route {...routes.authorCreate} />
    </Switch>
  </div>
);

export { NavLinks, Routes };
