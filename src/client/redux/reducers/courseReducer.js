import { fromJS, List, Map } from 'immutable';
import { handleActions } from 'redux-actions';
import {
  loadCoursesSuccess,

  createCourseSuccess,
  updateCourseSuccess,

  deleteCourseSuccess
} from '../actions/courseActions';

const defaultState = new List();
const courseReducer = handleActions({
  [loadCoursesSuccess]: (state, action) => fromJS(action.payload.courses),
  [createCourseSuccess]: (state, action) => state.push(new Map(action.payload.course)),
  [updateCourseSuccess]: (state, action) => state.splice(
    state.findKey(course => course.get('id') === action.payload.course.id),
    1, new Map(action.payload.course)
  ),
  [deleteCourseSuccess]: (state, action) => state.splice(
    state.findKey(course => course.get('id') === action.payload.courseId),
    1
  ),
}, defaultState);

// const courseReducer = (state = new List(), action) => {
//   switch(action.type) {
//     case types.LOAD_COURSES_SUCCESS:
//       return fromJS(action.payload.courses);

//     case types.CREATE_COURSE_SUCCESS:
//       return state.push(new Map(action.payload.course));

//     case types.UPDATE_COURSE_SUCCESS:
//       return state.splice(
//         state.findKey(course => course.get('id') === action.payload.course.id),
//         1, new Map(action.payload.course)
//       );

//     case types.DELETE_COURSE_SUCCESS:
//       return state.splice(
//         state.findKey(course => course.get('id') === action.payload.courseId),
//         1
//       );

//     default:
//       return state;
//   }
// };

export default courseReducer;
