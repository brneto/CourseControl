import { createActions } from 'redux-actions';

export const {
  saveRequest,

  loadRequest,
  loadSuccess,

  createSuccess,
  updateSuccess,

  removeRequest,
  removeSuccess
} = createActions({
  SAVE_REQUEST: [
    payload => payload,
    (payload, meta) => meta
  ]
},
  'LOAD_REQUEST',
  'LOAD_SUCCESS',
  'CREATE_SUCCESS',
  'UPDATE_SUCCESS',
  'REMOVE_REQUEST',
  'REMOVE_SUCCESS'
);
