import { createActions } from 'redux-actions';

export const {
  saveCourseRequest,

  loadCoursesRequest,
  loadCoursesSuccess,

  createCourseSuccess,
  updateCourseSuccess,

  deleteCourseRequest,
  deleteCourseSuccess
} = createActions({
  SAVE_COURSE_REQUEST: [
    course => course,
    (course, form) => form
  ]
},
  'LOAD_COURSES_REQUEST',
  'LOAD_COURSES_SUCCESS',
  'CREATE_COURSE_SUCCESS',
  'UPDATE_COURSE_SUCCESS',
  'DELETE_COURSE_REQUEST',
  'DELETE_COURSE_SUCCESS'
);
