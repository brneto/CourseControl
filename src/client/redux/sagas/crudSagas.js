import { all, takeEvery, call, put } from 'redux-saga/effects';
import { startSubmit, stopSubmit } from 'redux-form/immutable';
import { authorApi, courseApi } from '../../api';
import {
  loadRequest,
  loadSuccess,

  saveRequest,
  createSuccess,
  updateSuccess,

  removeRequest,
  removeSuccess
} from '../actions/crudActions';
import { saveWarn, removeWarn } from '../thunks/crudThunks';

export function* watchCourses() {
  yield all([
    takeEvery(loadRequest, workLoad),
    takeEvery(saveRequest, workSave),
    takeEvery(removeRequest, workDelete),
  ]);
}

function* workLoad() {
  try {
    //TODO: Create a parameter to this method know which api to fetch
    const authors = yield call(authorApi.getAllAuthors);
    yield put(loadSuccess(authors));
    const courses = yield call(courseApi.getAllCourses);
    yield put(loadSuccess(courses));
  } catch(e) {
    throw(e);
  }
}

function* workSave(action) {
  const { payload, meta: form } = action;
  let apiSaveMethod;

  switch(form) {
    case 'author':
      apiSaveMethod = authorApi.saveAuthor;
      break;
    case 'course':
      apiSaveMethod = courseApi.saveCourse;
      break;
    default:
      throw 'Unknown form name!';
  }

  yield put(startSubmit(form));
  try {
    const saved = yield call(apiSaveMethod, payload);
    yield payload.id ?
      put(updateSuccess(saved)) :
      put(createSuccess(saved));
    yield put(saveWarn());
  } catch(e) {
    throw e;
  } finally {
    yield put(stopSubmit(form));
  }
}

function* workDelete(action) {
  const { payload, meta: form } = action;
  let apiDeleteMethod;

  switch(form) {
    case 'author':
      apiDeleteMethod = authorApi.deleteAuthor;
      break;
    case 'course':
      apiDeleteMethod = courseApi.deleteCourse;
      break;
    default:
      throw 'Unknown form name!';
  }

  try {
    const deleted = yield call(apiDeleteMethod, payload);
    yield put(removeSuccess(deleted));
    yield put(removeWarn());
  } catch(e) {
    throw e;
  }
}
