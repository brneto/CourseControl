import { Map } from 'immutable';
import { createSelector } from 'reselect';
import { createMatchSelector } from 'react-router-redux';

const authorFormatter = author =>
  author.set(
    'fullName',
    `${author.get('firstName')} ${author.get('lastName')}`
  );
const authorsFormattedSelector = createSelector(
  state => state.get('authors'),
  authors => authors.map(author => authorFormatter(author))
);

const authorSelector = state => {
  const matchSelector = createMatchSelector('/author/:id');
  const match = matchSelector(state.toJS());

  if (match && state.get('authors').size) {
    const id = match.params.id;
    return state.get('authors').find(author => author.get('id') === id);
  }
};

const authorByIdSelector = createSelector(
  authorSelector,
  author => (author ? author : new Map())
);

export { authorsFormattedSelector, authorByIdSelector };
