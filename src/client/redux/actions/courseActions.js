import keyMirror from 'fbjs/lib/keyMirror';

export const types = keyMirror({
  LOAD_COURSES_REQUEST: 1,
  LOAD_COURSES_SUCCESS: 1,

  SAVE_COURSE_REQUEST: 1,
  CREATE_COURSE_SUCCESS: 1,
  UPDATE_COURSE_SUCCESS: 1,

  DELETE_COURSE_REQUEST: 1,
  DELETE_COURSE_SUCCESS: 1,
});

export const loadCoursesRequest =
  () => ({ type: types.LOAD_COURSES_REQUEST });

export const loadCoursesSuccess =
  courses => ({ type: types.LOAD_COURSES_SUCCESS, courses });

export const saveCourseRequest =
  course => ({ type: types.SAVE_COURSE_REQUEST, course });

export const createCourseSuccess =
  course => ({ type: types.CREATE_COURSE_SUCCESS, course });

export const updateCourseSuccess =
  course => ({ type: types.UPDATE_COURSE_SUCCESS, course });

export const deleteCourseRequest =
  course => ({ type: types.DELETE_COURSE_REQUEST, course });

export const deleteCourseSuccess =
  courseId => ({ type: types.DELETE_COURSE_SUCCESS, courseId });
