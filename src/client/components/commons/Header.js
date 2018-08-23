import React from 'react';
import PropTypes from 'prop-types';
import { NavLinks } from '../router';
import LoadingDots from './LoadingDots';

const Header = ({ loading }) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <NavLinks />
    {loading && <LoadingDots style={{ color: 'white', }}
      interval={100}
      dots={10} />}
  </nav>
);

Header.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default Header;
