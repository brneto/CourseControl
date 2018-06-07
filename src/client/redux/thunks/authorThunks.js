import { push } from 'connected-react-router/immutable';
import toastr from 'toastr';
import {
  loadAuthorsRequest,
  saveAuthorRequest,
  deleteAuthorRequest
} from '../actions/authorActions';

export const loadAuthors = () => dispatch => dispatch(loadAuthorsRequest());

export const goToAddAuthor = () => dispatch => dispatch(push('/author'));

export const saveAuthor = (author, form) => dispatch =>
  dispatch(saveAuthorRequest(author.toJS(), form));

export const saveAuthorWarn = () => dispatch => {
  toastr.success('Author saved');
  return dispatch(push('/authors'));
};

export const deleteAuthor = author => dispatch =>
  dispatch(deleteAuthorRequest(author));

export const deleteAuthorWarn = () => () => toastr.success('Author deleted');
