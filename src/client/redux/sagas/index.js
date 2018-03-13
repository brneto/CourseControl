
import { all } from 'redux-saga/effects';
import { watchCourses } from './courseSagas';
import { watchAuthors } from './authorSagas';

export default function* watchSagas() {
  yield all([
    watchAuthors(),
    watchCourses(),
  ]);
}
