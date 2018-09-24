import { Map } from 'immutable';
import { createSelector } from 'reselect';
import { createMatchSelector } from 'connected-react-router/immutable';

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
  // The argument are the props to match against,
  // they are identical to the matching props Route accepts:
  // {
  //   path, // like /users/:id
  //   strict, // optional, defaults to false
  //   exact // optional, defaults to false
  // }
  const getMatch = createMatchSelector({ path: '/author/:id' });
  const match = getMatch(state);

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
