import * as courseActions from '../../../../client/redux/actions/courseActions';
import * as courseThunks from '../../../../client/redux/thunks/courseThunks';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

const middleware = [thunk];
const mockstore = configureMockStore(middleware);

describe('Course Thunks', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should create LOAD_COURSES_REQUEST when loading courses', done => {
    // Here's an example call to nock.
    // nock('http://example.com/')
    //  .get('/courses')
    //  .reply(200, { body: { course: [{ id: 1, firstName: 'Cory', lastName: 'House' }] }});

    const expectedAction = [
      {
        type: courseActions.loadCoursesRequest.toString(),
        body: { course: [{ id: 1, firstName: 'Cory', lastName: 'House' }] }
      }
    ];
    const store = mockstore({ courses: [] }, expectedAction);
    store.dispatch(courseThunks.loadCourses());

    const actions = store.getActions();
    expect(actions[0].type).toEqual(
      courseActions.loadCoursesRequest.toString()
    );
    done();
  });
});
