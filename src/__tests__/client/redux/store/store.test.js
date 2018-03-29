import { createStore } from 'redux';
import { fromJS } from 'immutable';
import { reducers } from '../../../../client/redux/reducers';
import { initialState as preloadedState } from '../../../../client/redux/store';
import * as courseActions from '../../../../client/redux/actions/courseActions';

describe('Store', () => {
  it('should handle loading courses', () => {
    // arrange
    const store = createStore(reducers, preloadedState);
    const courses = [
      { id: 'clean-code', title: 'Clean Code' },
      { id: 'design-pattern', title: 'Design Pattern' },
    ];

    // act
    const action = courseActions.loadCoursesSuccess(courses);
    store.dispatch(action);

    // assert
    const actual = store.getState().get('courses');
    const expected = fromJS(courses);
    expect(actual).toEqual(expected);
  });
});
