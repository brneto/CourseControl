import { fromJS, List, Map } from 'immutable';
import { handleActions } from 'redux-actions';
import {
  loadAuthorsSuccess,
  createAuthorSuccess,
  updateAuthorSuccess,
  deleteAuthorRequest,
  deleteAuthorSuccess
} from '../actions/authorActions';

const defaultState = new List();
const authorReducer = handleActions(
  {
    [loadAuthorsSuccess]: (state, action) => fromJS(action.payload.authors),
    [createAuthorSuccess]: (state, action) =>
      state.push(new Map(action.payload.author)),
    [updateAuthorSuccess]: (state, action) =>
      state.splice(
        state.findKey(author => author.get('id') === action.payload.author.id),
        1,
        new Map(action.payload.author)
      ),
    [deleteAuthorRequest]: (state, action) => {
      action.payload.author.deleting = true;
      return state.splice(
        state.findKey(author => author.get('id') === action.payload.author.id),
        1,
        new Map(action.payload.author)
      );
    },
    [deleteAuthorSuccess]: (state, action) =>
      state.splice(
        state.findKey(author => author.get('id') === action.payload.author.id),
        1
      )
  },
  defaultState
);

// const authorReducer = (state = new List(), action) => {
//   switch(action.type) {
//     case types.LOAD_AUTHORS_SUCCESS:
//       return fromJS(action.payload.authors);

//     case types.CREATE_AUTHOR_SUCCESS:
//       return state.push(new Map(action.payload.author));

//     case types.UPDATE_AUTHOR_SUCCESS:
//       return state.splice(
//         state.findKey(author => author.get('id') === action.payload.author.id),
//         1, new Map(action.payload.author)
//       );

//     case types.DELETE_AUTHOR_SUCCESS:
//       return state.splice(
//         state.findKey(author => author.get('id') === action.payload.authorId),
//         1
//       );

//     default:
//       return state;
//   }
// };

export default authorReducer;
