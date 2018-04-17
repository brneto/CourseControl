import keyMirror from 'fbjs/lib/keyMirror';
import { createActions } from 'redux-actions';

export const types = keyMirror({
  LOAD_COURSES_REQUEST: 1,
  LOAD_COURSES_SUCCESS: 1,

  SAVE_COURSE_REQUEST: 1,
  CREATE_COURSE_SUCCESS: 1,
  UPDATE_COURSE_SUCCESS: 1,

  DELETE_COURSE_REQUEST: 1,
  DELETE_COURSE_SUCCESS: 1,
});

export const {
  loadCoursesRequest,
  loadCoursesSuccess,

  saveCourseRequest,
  createCourseSuccess,
  updateCourseSuccess,

  deleteCourseRequest,
  deleteCourseSuccess
} = createActions({
  [types.LOAD_COURSES_REQUEST]: null,
  [types.LOAD_COURSES_SUCCESS]: courses => ({ courses }),

  [types.SAVE_COURSE_REQUEST]: course => ({ course }),
  [types.CREATE_COURSE_SUCCESS]: course => ({ course }),
  [types.UPDATE_COURSE_SUCCESS]: course => ({ course }),

  [types.DELETE_COURSE_REQUEST]: course => ({ course }),
  [types.DELETE_COURSE_SUCCESS]: courseId => ({ courseId })
});
