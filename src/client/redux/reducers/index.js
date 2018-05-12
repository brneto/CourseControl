//import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';
import { routerReducer as router } from 'react-router-redux';
import { reducer as form } from 'redux-form/immutable';
import authors from './authorReducer';
import courses from './courseReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const reducers = combineReducers({
  authors,
  courses,
  ajaxCallsInProgress,
  router,
  form,
});

export { reducers };
