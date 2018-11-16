import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AuthorItem = ({ id, fullName, deleting, onDelete }) => (
  <tr>
    <td>{id}</td>
    <td><Link to={'/author/' + id}>{fullName}</Link></td>
    <td>
      <button
        disabled={deleting}
        className="btn btn-danger"
        onClick={onDelete}
      >{deleting ? 'Deleting...' : 'Delete'}</button>
    </td>
  </tr>
);

AuthorItem.propTypes = {
  id: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  deleting: PropTypes.bool,
  onDelete: PropTypes.func.isRequired
};

export default AuthorItem;
