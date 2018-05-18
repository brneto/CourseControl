import { fromJS, List, Map } from 'immutable';
import { handleActions } from 'redux-actions';
import {
  loadCoursesSuccess,
  createCourseSuccess,
  updateCourseSuccess,
  deleteCourseRequest,
  deleteCourseSuccess
} from '../actions/courseActions';

const defaultState = new List();
const courseReducer = handleActions(
  {
    [loadCoursesSuccess]: (state, action) => fromJS(action.payload),
    [createCourseSuccess]: (state, action) =>
      state.push(new Map(action.payload)),
    [updateCourseSuccess]: (state, action) =>
      state.splice(
        state.findKey(course => course.get('id') === action.payload.id),
        1,
        new Map(action.payload)
      ),
    [deleteCourseRequest]: (state, action) => {
      action.payload.deleting = true;
      return state.splice(
        state.findKey(course => course.get('id') === action.payload.id),
        1,
        new Map(action.payload)
      );
    },
    [deleteCourseSuccess]: (state, action) =>
      state.splice(
        state.findKey(course => course.get('id') === action.payload.id),
        1
      )
  },
  defaultState
);

export default courseReducer;
