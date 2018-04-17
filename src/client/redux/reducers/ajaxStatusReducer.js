import { ajaxCallBegin, ajaxCallEnd } from '../actions/ajaxStatusActions';
import { handleActions } from 'redux-actions';

const defaultState = 0;
const ajaxReducer = handleActions({
  [ajaxCallBegin]: state => ++state,
  [ajaxCallEnd]: state => --state,
}, defaultState);

const ajaxStatusReducer = (state, action) => {
  if (action.type.endsWith('_REQUEST')) {
    return ajaxReducer(state, ajaxCallBegin());
  } else if (action.type.endsWith('_SUCCESS')) {
    return ajaxReducer(state, ajaxCallEnd());
  }
  return ajaxReducer(state, action);
};

export default ajaxStatusReducer;
