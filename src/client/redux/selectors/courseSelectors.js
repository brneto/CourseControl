import { Map } from 'immutable';
import { createSelector } from 'reselect';
import { createMatchSelector } from 'connected-react-router/immutable';

const courseSelector = state => {
  // The argument are the props to match against,
  // they are identical to the matching props Route accepts:
  // {
  //   path, // like /users/:id
  //   strict, // optional, defaults to false
  //   exact // optional, defaults to false
  // }
  const getMatch = createMatchSelector({ path: '/course/:id' });
  const match = getMatch(state);
  if(match && state.get('courses').size) {
    const id = match.params.id;
    return state.get('courses').find(course => course.get('id') === id);
  }
};

const courseByIdSelector = createSelector(
  courseSelector,
  course => course || new Map()
);

export { courseByIdSelector };
