import { createActions } from 'redux-actions';

export const {
  loadAuthorsRequest,
  loadAuthorsSuccess,

  saveAuthorRequest,
  createAuthorSuccess,
  updateAuthorSuccess,

  deleteAuthorRequest,
  deleteAuthorSuccess
} = createActions({
  LOAD_AUTHORS_REQUEST: null,
  LOAD_AUTHORS_SUCCESS: authors => ({ authors }),

  SAVE_AUTHOR_REQUEST: [
    author => ({ author }),
    (author, form) => ({ form })
  ],
  CREATE_AUTHOR_SUCCESS: author => ({ author }),
  UPDATE_AUTHOR_SUCCESS: author => ({ author }),

  DELETE_AUTHOR_REQUEST: author => ({ author }),
  DELETE_AUTHOR_SUCCESS: authorId => ({ authorId })
});
