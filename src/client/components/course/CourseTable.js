import React from 'react';
import PropTypes from 'prop-types';
import CourseTableRow from './CourseTableRow';

const CourseTable = ({
  courses,
  onDelete,
}) => (
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
          {courses.map(course =>
            <CourseTableRow
              key={course.id}
              {...course}
              onDelete={() => onDelete(course)}
            />
          )}
        </tbody>
      </table>
);

CourseTable.propTypes = {
  courses: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default CourseTable;
