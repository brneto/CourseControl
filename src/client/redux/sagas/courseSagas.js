import { all, takeEvery, call, put } from 'redux-saga/effects';
import courseApi from '../../api/mockCourseApi';
import {
  types,
  loadCoursesSuccess,
  createCourseSuccess,
  updateCourseSuccess,
  deleteCourseSuccess,
} from '../actions/courseActions';
import { saveCourseWarn, deleteCourseWarn } from '../thunks/courseThunks';

export function* watchCourses() {
  yield all([
    takeEvery(types.LOAD_COURSES_REQUEST, workLoadCourses),
    takeEvery(types.SAVE_COURSE_REQUEST, workSaveCourse),
    takeEvery(types.DELETE_COURSE_REQUEST, workDeleteCourse),
  ]);
}

function* workLoadCourses() {
  try {
    const courses = yield call(courseApi.getAllCourses);
    yield put(loadCoursesSuccess(courses));
  } catch(e) {
    throw(e);
  }
}

function* workSaveCourse(action) {
  try {
    const { course } = action;
    const savedCourse = yield call(courseApi.saveCourse, course);
    yield course.id ?
      put(updateCourseSuccess(savedCourse)) :
      put(createCourseSuccess(savedCourse));
    yield put(saveCourseWarn());
  } catch(e) {
    throw(e);
  }
}

function* workDeleteCourse(action) {
  try {
    const deletedCourseId = yield call(courseApi.deleteCourse, action.course.id);
    yield put(deleteCourseSuccess(deletedCourseId));
    yield put(deleteCourseWarn());
  } catch(e) {
    throw(e);
  }
}
