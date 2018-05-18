import { createActions } from 'redux-actions';

export const {
  saveAuthorRequest,

  loadAuthorsRequest,
  loadAuthorsSuccess,

  createAuthorSuccess,
  updateAuthorSuccess,

  deleteAuthorRequest,
  deleteAuthorSuccess
} = createActions({
  SAVE_AUTHOR_REQUEST: [
    author => author,
    (author, form) => form
  ]
},
  'LOAD_AUTHORS_REQUEST',
  'LOAD_AUTHORS_SUCCESS',
  'CREATE_AUTHOR_SUCCESS',
  'UPDATE_AUTHOR_SUCCESS',
  'DELETE_AUTHOR_REQUEST',
  'DELETE_AUTHOR_SUCCESS'
);
