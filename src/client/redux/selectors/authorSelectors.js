import { createSelector } from 'reselect';
import { createMatchSelector } from 'react-router-redux';

const authorFormatter =
  author => ({
    value: author.get('id'),
    text: `${author.get('firstName')} ${author.get('lastName')}`,
  });

const authorsFormattedSelector = createSelector(
  state => state.get('authors'),
  authors => authors.map(author => authorFormatter(author)).toJS()
);

const authorSelector = state => {
  const matchSelector = createMatchSelector('/author/:id');
  const match = matchSelector(state.toJS());

  if(match && state.get('authors').size) {
    const id = match.params.id;
    return state.get('authors').find(author => author.get('id') === id);
  }
};

const authorByIdSelector = createSelector(
  authorSelector,
  author => author ? author : new Map()
);

export { authorsFormattedSelector, authorByIdSelector };
