import { all, takeEvery, call, put } from 'redux-saga/effects';
import { startSubmit, stopSubmit } from 'redux-form/immutable';
import { courseApi } from '../../api';
import {
  loadCoursesRequest,
  loadCoursesSuccess,

  saveCourseRequest,
  createCourseSuccess,
  updateCourseSuccess,

  deleteCourseRequest,
  deleteCourseSuccess
} from '../actions/courseActions';
import { saveCourseWarn, deleteCourseWarn } from '../thunks/courseThunks';

export function* watchCourses() {
  yield all([
    takeEvery(loadCoursesRequest, workLoadCourses),
    takeEvery(saveCourseRequest, workSaveCourse),
    takeEvery(deleteCourseRequest, workDeleteCourse),
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
  const course = action.payload;
  const form = action.meta;

  yield put(startSubmit(form));
  try {
    const savedCourse = yield call(courseApi.saveCourse, course);
    yield course.id ?
      put(updateCourseSuccess(savedCourse)) :
      put(createCourseSuccess(savedCourse));
    yield put(saveCourseWarn());
  } catch(e) {
    throw(e);
  } finally {
    yield put(stopSubmit(form));
  }
}

function* workDeleteCourse(action) {
  const course = action.payload;

  try {
    const deletedCourse = yield call(courseApi.deleteCourse, course);
    yield put(deleteCourseSuccess(deletedCourse));
    yield put(deleteCourseWarn());
  } catch(e) {
    throw(e);
  }
}
