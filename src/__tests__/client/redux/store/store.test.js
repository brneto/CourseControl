import { createStore } from 'redux';
import { fromJS } from 'immutable';
import reducerWithRouter from '../../../../client/redux/reducers';
import preloadedState from '../../../../client/redux/store/preloadedState';
import * as courseActions from '../../../../client/redux/actions/courseActions';

describe('Store', () => {
  it('should handle loading courses', () => {
    // arrange
    const history = {
      action: 'PUSH',
      location: '/'
    };
    const reducer = reducerWithRouter(history);
    const store = createStore(reducer, preloadedState);
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
