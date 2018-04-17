import keyMirror from 'fbjs/lib/keyMirror';
import { createActions } from 'redux-actions';

export const types = keyMirror({
  LOAD_AUTHORS_REQUEST: 1,
  LOAD_AUTHORS_SUCCESS: 1,

  SAVE_AUTHOR_REQUEST: 1,
  CREATE_AUTHOR_SUCCESS: 1,
  UPDATE_AUTHOR_SUCCESS: 1,

  DELETE_AUTHOR_REQUEST: 1,
  DELETE_AUTHOR_SUCCESS: 1,
});

export const {
  loadAuthorsRequest,
  loadAuthorsSuccess,

  saveAuthorRequest,
  createAuthorSuccess,
  updateAuthorSuccess,

  deleteAuthorRequest,
  deleteAuthorSuccess
} = createActions({
  [types.LOAD_AUTHORS_REQUEST]: null,
  [types.LOAD_AUTHORS_SUCCESS]: authors => ({ authors }),

  [types.SAVE_AUTHOR_REQUEST]: author => ({ author }),
  [types.CREATE_AUTHOR_SUCCESS]: author => ({ author }),
  [types.UPDATE_AUTHOR_SUCCESS]: author => ({ author }),

  [types.DELETE_AUTHOR_REQUEST]: author => ({ author }),
  [types.DELETE_AUTHOR_SUCCESS]: authorId => ({ authorId })
});
