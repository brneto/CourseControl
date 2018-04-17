import { fromJS, List, Map } from 'immutable';
import { types } from '../actions/authorActions';

const authorReducer = (state = new List(), action) => {
  switch(action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      return fromJS(action.payload.authors);

    case types.CREATE_AUTHOR_SUCCESS:
      return state.push(new Map(action.payload.author));

    case types.UPDATE_AUTHOR_SUCCESS:
      return state.splice(
        state.findKey(author => author.get('id') === action.payload.author.id),
        1, new Map(action.payload.author)
      );

    case types.DELETE_AUTHOR_SUCCESS:
      return state.splice(
        state.findKey(author => author.get('id') === action.payload.authorId),
        1
      );

    default:
      return state;
  }
};

export default authorReducer;
