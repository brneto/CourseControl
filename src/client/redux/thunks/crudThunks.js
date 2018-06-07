import toastr from 'toastr';
import {
  loadRequest,
  saveRequest,
  removeRequest
} from '../actions/crudActions';
import { goToCourses } from './routerThunks';

export const load = () => dispatch => dispatch(loadRequest());

export const save = (course, form) => dispatch =>
  dispatch(saveRequest(course.toJS(), form));

export const saveWarn = () => dispatch => {
  toastr.success('Course saved');
  return dispatch(goToCourses());
};

export const remove = course => dispatch =>
  dispatch(removeRequest(course));

export const removeWarn = () => () => toastr.success('Course deleted');
