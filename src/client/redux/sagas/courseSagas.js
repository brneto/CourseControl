import { all, takeEvery, call, put } from 'redux-saga/effects';
import courseApi from '../../api/mockCourseApi';
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
  try {
    const { course } = action.payload;
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
    const { course } = action.payload;
    const deletedCourseId = yield call(courseApi.deleteCourse, course.id);
    yield put(deleteCourseSuccess(deletedCourseId));
    yield put(deleteCourseWarn());
  } catch(e) {
    throw(e);
  }
}
