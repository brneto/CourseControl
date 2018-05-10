import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as courseThunks from '../../redux/thunks/courseThunks';
import { courseByIdSelector } from '../../redux/selectors/courseSelectors';
import { authorsFormattedSelector } from '../../redux/selectors/authorSelectors';
import CourseForm from './CourseForm';

const mapStateToProps = state => ({
  course: courseByIdSelector(state),
  authors: authorsFormattedSelector(state),
  saving: state.get('ajaxCallsInProgress') > 0
});
const mapDispatchToProps = dispatch => ({
  // Similar to:
  // { saveCourse: course => dispatch(courseThunks.saveCourse(course)) }
  actions: bindActionCreators(courseThunks, dispatch),
});

@connect(mapStateToProps, mapDispatchToProps)
class ManageCoursesPage extends Component {
  static propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    saving: PropTypes.bool.isRequired,
    actions: PropTypes.object.isRequired,
  };

  state = {
    course: this.props.course,
    error: {},
  };

  // This is required because when props change,
  // we'll need to update our container component's state.
  static getDerivedStateFromProps(nextProps, prevState) {
    const { course: oldCourse } = prevState;
    const { course } = nextProps;

    return course.id !== oldCourse.id ? { course } : null;
  }

  handleChange = event => {
    const { target: { name: field, value } } = event;
    const { course } = this.state;

    course[field] = value;
    this.setState({ course });
  };

  handleSubmit = event => {
    const { actions } = this.props;

    if(this.courseFormIsValid()) {
      actions.saveCourse(this.state.course);
    }

    event.preventDefault();
    event.stopPropagation();
  };

  courseFormIsValid = () => {
    let formIsValid = true;
    let errors = {};

    if(this.state.course.title.length < 5) {
      errors.title = 'Title must be at least 5 characters.';
      formIsValid = false;
    }

    this.setState({ errors });
    return formIsValid;
  };

  render= () => (
    <CourseForm
      allAuthors = {this.props.authors}
      onChange={this.handleChange}
      onSubmit={this.handleSubmit}
      course={this.state.course}
      saving={this.props.saving}
      error={this.state.error}
    />
  );
}

export default ManageCoursesPage;
