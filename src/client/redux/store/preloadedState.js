import { fromJS } from 'immutable';

const preloadedState = fromJS({
  authors: [],
  courses: [],
  ajaxCallsInProgress: 0
});

export default preloadedState;
