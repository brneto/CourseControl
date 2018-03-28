import { fromJS } from 'immutable';

const initialState = fromJS({
  authors: [],
  courses: [],
  ajaxCallsInProgress: 0,
  router: null,
});

export { initialState };
