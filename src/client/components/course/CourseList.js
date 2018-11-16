import React from 'react';
import PropTypes from 'prop-types';
import CourseItem from './CourseItem';

const CourseList = ({ data, onDelete }) => (
  <table className="table table-striped mt-md-3">
    <caption>List of courses</caption>
    <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
        <th>Length</th>
        <th>&nbsp;</th>
      </tr>
    </thead>
    <tbody>
      {data.map(course => (
        <CourseItem
          key={course.id}
          {...course}
          onDelete={() => onDelete(course)}
        />
      ))}
    </tbody>
  </table>
);

CourseList.propTypes = {
  data: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default CourseList;
