import { push } from 'react-router-redux';
import toastr from 'toastr';
import {
  loadCoursesRequest,
  saveCourseRequest,
  deleteCourseRequest
} from '../actions/courseActions';

export const loadCourses = () => dispatch => dispatch(loadCoursesRequest());

export const goToAddCourse = () => dispatch => dispatch(push('/course'));

export const saveCourse = course => dispatch => dispatch(saveCourseRequest(course));

export const saveCourseWarn = () => dispatch => {
  toastr.success('Course saved');
  return dispatch(push('/courses'));
};

export const deleteCourse = course => dispatch => dispatch(deleteCourseRequest(course));

export const deleteCourseWarn = () => () => {
  toastr.success('Course deleted');
};