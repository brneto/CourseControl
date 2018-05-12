import { createActions } from 'redux-actions';

export const {
  loadCoursesRequest,
  loadCoursesSuccess,

  saveCourseRequest,
  createCourseSuccess,
  updateCourseSuccess,

  deleteCourseRequest,
  deleteCourseSuccess
} = createActions({
  LOAD_COURSES_REQUEST: null,
  LOAD_COURSES_SUCCESS: courses => ({ courses }),

  SAVE_COURSE_REQUEST: [
    course => ({ course }),
    (course, form) => ({ form })
  ],
  CREATE_COURSE_SUCCESS: course => ({ course }),
  UPDATE_COURSE_SUCCESS: course => ({ course }),

  DELETE_COURSE_REQUEST: course => ({ course }),
  DELETE_COURSE_SUCCESS: courseId => ({ courseId })
});
