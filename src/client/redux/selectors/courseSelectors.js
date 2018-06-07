import { Map } from 'immutable';
import { createSelector } from 'reselect';
import { matchPath } from 'react-router-dom';

const courseSelector = state => {
  const match = matchPath(
    state.get('router').get('location').get('pathname'),
    { path: '/course/:id' }
  );

  if(match && state.get('courses').size) {
    const id = match.params.id;
    return state.get('courses').find(course => course.get('id') === id);
  }
};

const courseByIdSelector = createSelector(
  courseSelector,
  course => course ? course : new Map()
);

export { courseByIdSelector };
