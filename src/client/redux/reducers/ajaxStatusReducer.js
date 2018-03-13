import { types } from '../actions/ajaxStatusActions';
import initialState from '../store/initialState';

const ajaxStatusReducer = (
  state = initialState.get('ajaxCallsInProgress'),
  action
) => {
  if (
    action.type === types.AJAX_CALL_BEGIN ||
    action.type.endsWith('_REQUEST')
  ) {
    return ++state;
  } else if (
    action.type === types.AJAX_CALL_END ||
    action.type.endsWith('_SUCCESS')
  ) {
    return --state;
  }
  return state;
};

export default ajaxStatusReducer;
