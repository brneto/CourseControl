import { createSelector } from 'reselect';

const loadingSelector = createSelector(
  state => state.get('ajaxCallsInProgress') > 0,
  loading => loading
);

const locationSelector = createSelector(
  state => state.get('router').get('location'),
  location => location.size ? location.toJS() : false
);

export { loadingSelector, locationSelector };
