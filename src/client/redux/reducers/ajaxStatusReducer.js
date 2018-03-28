import { types } from '../actions/ajaxStatusActions';

const ajaxStatusReducer = (state = 0, action) => {
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
