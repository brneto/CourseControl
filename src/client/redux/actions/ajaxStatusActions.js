import keyMirror from 'fbjs/lib/keyMirror';
import { createAction } from 'redux-actions';

export const types = keyMirror({
  AJAX_CALL_BEGIN: 1,
  AJAX_CALL_END: 1,
});

export const ajaxCallBegin = createAction(types.AJAX_CALL_BEGIN);
export const ajaxCallEnd = createAction(types.AJAX_CALL_END);
