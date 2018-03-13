import { fromJS, Map } from 'immutable';
import { types } from '../actions/courseActions';
import initialState from '../store/initialState';

const courseReducer = (state = initialState.get('courses'), action) => {
  switch(action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return fromJS(action.courses);

    case types.CREATE_COURSE_SUCCESS:
      return state.push(new Map(action.course));

    case types.UPDATE_COURSE_SUCCESS:
      return state.splice(
        state.findKey(course => course.get('id') === action.course.id),
        1, new Map(action.course)
      );

    case types.DELETE_COURSE_SUCCESS:
      return state.splice(
        state.findKey(course => course.get('id') === action.courseId),
        1
      );

    default:
      return state;
  }
};

export default courseReducer;
