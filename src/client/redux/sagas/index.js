import { all } from 'redux-saga/effects';
import { watchCourses } from './courseSagas';
import { watchAuthors } from './authorSagas';

function* watchSagas() {
  yield all([
    watchAuthors(),
    watchCourses(),
  ]);
}

export { watchSagas };
