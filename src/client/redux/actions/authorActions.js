import keyMirror from 'fbjs/lib/keyMirror';

export const types = keyMirror({
  LOAD_AUTHORS_REQUEST: 1,
  LOAD_AUTHORS_SUCCESS: 1,
  LOAD_AUTHORS_FAIL: 1,

  SAVE_AUTHOR_REQUEST: 1,
  CREATE_AUTHOR_SUCCESS: 1,
  UPDATE_AUTHOR_SUCCESS: 1,

  DELETE_AUTHOR_REQUEST: 1,
  DELETE_AUTHOR_SUCCESS: 1,
});

export const loadAuthorsRequest =
  () => ({ type: types.LOAD_AUTHORS_REQUEST });

export const loadAuthorsSuccess =
  authors => ({ type: types.LOAD_AUTHORS_SUCCESS, authors });

export const saveAuthorRequest =
  author => ({ type: types.SAVE_AUTHOR_REQUEST, author });

export const createAuthorSuccess =
  author => ({ type: types.CREATE_AUTHOR_SUCCESS, author });

export const updateAuthorSuccess =
  author => ({ type: types.UPDATE_AUTHOR_SUCCESS, author });

export const deleteAuthorRequest =
  author => ({ type: types.DELETE_AUTHOR_REQUEST, author });

export const deleteAuthorSuccess =
  authorId => ({ type: types.DELETE_AUTHOR_SUCCESS, authorId });
