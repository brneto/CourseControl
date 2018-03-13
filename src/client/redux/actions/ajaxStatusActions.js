import keyMirror from 'fbjs/lib/keyMirror';

export const types = keyMirror({
  AJAX_CALL_BEGIN: 1,
  AJAX_CALL_END: 1,
});

export const ajaxCallBegin =
  () => ({ type: types.AJAX_CALL_BEGIN });

export const ajaxCallEnd =
  () => ({ type: types.AJAX_CALL_END });
