import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as courseThunks from '../../redux/thunks/courseThunks';

const mapDispatchToProps = dispatch => (
  // Same as:
  // actions: course => dispatch(courseActions.createCourse(course))
  { actions: bindActionCreators(courseThunks, dispatch) }
);

@connect(null, mapDispatchToProps)
class CoursesListRow extends Component {
  static propTypes = {
    course: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  state = {
    deleting: false,
  };

  deleteCourse = () => {
    const { course, actions } = this.props;
    actions.deleteCourse(course);
    this.setState({ deleting: true });
  };

  render() {
    const { deleting } = this.state;
    const { course } = this.props;
    return (
      <tr>
        <td><a href={course.watchHref} target="_blank">Watch</a></td>
        <td><Link to={'/course/' + course.id}>{course.title}</Link></td>
        <td>{course.authorId}</td>
        <td>{course.category}</td>
        <td>{course.length}</td>
        <td>
        <button
          disabled={deleting}
          className="btn btn-danger"
          onClick={this.deleteCourse}
        >{deleting ? 'Deleting...' : 'Delete'}</button>
        </td>
      </tr>
    );
  }
}

export default CoursesListRow;
