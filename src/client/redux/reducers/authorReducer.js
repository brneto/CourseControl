import { fromJS, Map } from 'immutable';
import { types } from '../actions/authorActions';
import initialState from '../store/initialState';

const authorReducer = (state = initialState.get('authors'), action) => {
  switch(action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      return fromJS(action.authors);

    case types.CREATE_AUTHOR_SUCCESS:
      return state.push(new Map(action.author));

    case types.UPDATE_AUTHOR_SUCCESS:
      return state.splice(
        state.findKey(author => author.get('id') === action.author.id),
        1, new Map(action.author)
      );

    case types.DELETE_AUTHOR_SUCCESS:
      return state.splice(
        state.findKey(author => author.get('id') === action.authorId),
        1
      );

    default:
      return state;
  }
};

export default authorReducer;
