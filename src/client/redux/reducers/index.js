//import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';
import { reducer as form } from 'redux-form/immutable';
import authors from './authorReducer';
import courses from './courseReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const reducers = combineReducers({
  form,
  authors,
  courses,
  ajaxCallsInProgress
});

const reducerWithRouter = (history) => connectRouter(history)(reducers);

export default reducerWithRouter;
