import { createActions } from 'redux-actions';

export const { ajaxCallIncrement, ajaxCallDecrement } = createActions({
  AJAX_CALL_INCREMENT: amount => amount && amount > 0 ? amount : 1,
  AJAX_CALL_DECREMENT: amount => amount && amount < 0 ? amount : -1,
});
