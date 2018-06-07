import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CourseTableRow = ({
  id,
  title,
  watchHref,
  authorId,
  category,
  duration,
  deleting,
  onDelete
}) => (
  <tr>
    <td><a href={watchHref} target="_blank" rel="noopener noreferrer">Watch</a></td>
    <td><Link to={'/course/' + id}>{title}</Link></td>
    <td>{authorId}</td>
    <td>{category}</td>
    <td>{duration}</td>
    <td>
      <button
        disabled={Boolean(deleting)}
        className="btn btn-danger"
        onClick={onDelete}
      >{deleting ? 'Deleting...' : 'Delete'}</button>
    </td>
  </tr>
);

CourseTableRow.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  watchHref: PropTypes.string.isRequired,
  authorId: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  deleting: PropTypes.bool,
  onDelete: PropTypes.func.isRequired
};

export default CourseTableRow;
