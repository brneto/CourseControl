import { fromJS, List, Map } from 'immutable';
import { types } from '../actions/courseActions';

const courseReducer = (state = new List(), action) => {
  switch(action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return fromJS(action.payload.courses);

    case types.CREATE_COURSE_SUCCESS:
      return state.push(new Map(action.payload.course));

    case types.UPDATE_COURSE_SUCCESS:
      return state.splice(
        state.findKey(course => course.get('id') === action.payload.course.id),
        1, new Map(action.payload.course)
      );

    case types.DELETE_COURSE_SUCCESS:
      return state.splice(
        state.findKey(course => course.get('id') === action.payload.courseId),
        1
      );

    default:
      return state;
  }
};

export default courseReducer;
