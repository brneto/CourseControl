import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as courseThunks from '../../redux/thunks/courseThunks';
import CourseList from './CourseList';

const CoursesPage = ({ courses, goToAddCourse, deleteCourse }) => (
  <>
    <h1>Courses</h1>
    <button
      className="btn btn-primary"
      style={{ margin: '0.5em' }}
      onClick={goToAddCourse}
    >
      Add Course
    </button>
    <CourseList data={courses} onDelete={deleteCourse} />
  </>
);

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  goToAddCourse: PropTypes.func.isRequired,
  deleteCourse: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  courses: state.get('courses').toJS()
});

const mapDispatchToProps = { ...courseThunks };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesPage);
