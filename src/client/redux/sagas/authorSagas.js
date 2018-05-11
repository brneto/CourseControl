import { takeEvery, call, put, all } from 'redux-saga/effects';
import { startSubmit, stopSubmit } from 'redux-form/immutable';
import { authorApi } from '../../api';
import {
  loadAuthorsRequest,
  loadAuthorsSuccess,

  saveAuthorRequest,
  createAuthorSuccess,
  updateAuthorSuccess,

  deleteAuthorRequest,
  deleteAuthorSuccess
} from '../actions/authorActions';
import { saveAuthorWarn, deleteAuthorWarn } from '../thunks/authorThunks';

export function* watchAuthors() {
  yield all([
    takeEvery(loadAuthorsRequest, workLoadAuthors),
    takeEvery(saveAuthorRequest, workSaveAuthor),
    takeEvery(deleteAuthorRequest, workDeleteAuthor),
  ]);
}

function* workLoadAuthors() {
  try {
    const authors = yield call(authorApi.getAllAuthors);
    yield put(loadAuthorsSuccess(authors));
  } catch(e) {
    throw(e);
  }
}

function* workSaveAuthor(action) {
  const { author } = action.payload;
  const { form } = action.meta;

  yield put(startSubmit(form));
  try {
    const savedAuthor = yield call(authorApi.saveAuthor, author);
    yield author.id ?
      put(updateAuthorSuccess(savedAuthor)) :
      put(createAuthorSuccess(savedAuthor));
    yield put(saveAuthorWarn());
  } catch(e) {
    throw(e);
  } finally {
    yield put(stopSubmit(form));
  }
}

function* workDeleteAuthor(action) {
  try {
    const { author } = action.payload;
    const deletedAuthorId = yield call(authorApi.deleteAuthor, author.value);
    yield put(deleteAuthorSuccess(deletedAuthorId));
    yield put(deleteAuthorWarn());
  } catch(e) {
    throw(e);
  }
}
