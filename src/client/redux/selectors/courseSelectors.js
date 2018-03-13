import { createSelector } from 'reselect';
import { createMatchSelector } from 'react-router-redux';

const courseSelector = state => {
  const matchSelector = createMatchSelector('/course/:id');
  const match = matchSelector(state.toJS());

  if(match && state.get('courses').size) {
    const id = match.params.id;
    return state.get('courses').find(course => course.get('id') === id);
  }
};

const courseByIdSelector = createSelector(
  courseSelector,
  course => course ? course.toJS() :
    { id: '', watchHref: '', title: '', author: '', length: '', category: '' }
);

export { courseByIdSelector };
