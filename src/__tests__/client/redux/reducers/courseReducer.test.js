import preloadedState from '../../../../client/redux/store/preloadedState';
import courseReducer from '../../../../client/redux/reducers/courseReducer';
import  * as courseActions from '../../../../client/redux/actions/courseActions';

let state, nextState;
afterEach(() => {
  state = nextState;
});

describe('Course Reducer', () => {
  it('should return default initial state when passed an unknown action', () => {
    //act
    const action = { type: 'UNKNOWN' };
    nextState = courseReducer(state, action);

    //assert
    expect(nextState).toEqual(preloadedState.get('courses'));
  });

  it('should load courses when passed LOAD_COURSE_SUCCESS', () => {
    //arrange
    const courses = [
      { id: 'clean-code', title: 'Clean Code' },
      { id: 'design-pattern', title: 'Design Pattern' },
    ];

    //act
    const action = courseActions.loadCoursesSuccess(courses);
    nextState = courseReducer(state, action);

    //assert
    expect(nextState.size).toEqual(2);
    expect(nextState.getIn([0, 'id'])).toEqual('clean-code');
    expect(nextState.getIn([1, 'title'])).toEqual('Design Pattern');
  });

  it('should add course when passed CREATE_COURSE_SUCCESS', () => {
    //arrange
    const newCourse = { id: 'a', title: 'A' };

    //act
    const action = courseActions.createCourseSuccess(newCourse);
    nextState = courseReducer(state, action);

    //assert
    expect(nextState.size).toEqual(3);
    expect(nextState.getIn([0,'id'])).toEqual('clean-code');
    expect(nextState.getIn([1,'id'])).toEqual('design-pattern');
    expect(nextState.getIn([2,'id'])).toEqual('a');
  });

  it('should update course when passed UPDATE_COURSE_SUCCESS', () => {
    //arrange
    const course = { id: 'a', title: 'New Title' };

    //act
    const action = courseActions.updateCourseSuccess(course);
    nextState = courseReducer(state, action);

    //assert
    expect(nextState.size).toEqual(3);
    expect(nextState.getIn([2,'title'])).toEqual('New Title');
  });
});
