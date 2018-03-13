import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';

class CoursesList extends Component {
  static propTypes = {
    courses: PropTypes.array.isRequired,
  };

  render() {
    const { courses } = this.props;
    return (
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
            <CourseListRow key={course.id} course={course} />
          )}
        </tbody>
      </table>
    );
  }
}

export default CoursesList;
