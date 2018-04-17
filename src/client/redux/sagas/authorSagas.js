import { takeEvery, call, put, all } from 'redux-saga/effects';
import authorApi from '../../api/mockAuthorApi';
import {
  types,
  loadAuthorsSuccess,
  createAuthorSuccess,
  updateAuthorSuccess,
  deleteAuthorSuccess
} from '../actions/authorActions';
import { saveAuthorWarn, deleteAuthorWarn } from '../thunks/authorThunks';

export function* watchAuthors() {
  yield all([
    takeEvery(types.LOAD_AUTHORS_REQUEST, workLoadAuthors),
    takeEvery(types.SAVE_AUTHOR_REQUEST, workSaveAuthor),
    takeEvery(types.DELETE_AUTHOR_REQUEST, workDeleteAuthor),
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
  try {
    const { author } = action.payload;
    const savedAuthor = yield call(authorApi.saveAuthor, author);
    yield author.id ?
      put(updateAuthorSuccess(savedAuthor)) :
      put(createAuthorSuccess(savedAuthor));
    yield put(saveAuthorWarn());
  } catch(e) {
    throw(e);
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
