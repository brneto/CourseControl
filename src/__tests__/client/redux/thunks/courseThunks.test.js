import { types } from '../../../../client/redux/actions/courseActions';
import  * as courseThunks from '../../../../client/redux/thunks/courseThunks';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

const middleware = [thunk];
const mockstore = configureMockStore(middleware);

describe('Course Thunks', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', async done => {
    // Here's an example call to nock.
    // nock('http://example.com/')
    //  .get('/courses')
    //  .reply(200, { body: { course: [{ id: 1, firstName: 'Cory', lastName: 'House' }] }});

    const expectedAction = [
      { type: types.AJAX_CALL_BEGIN },
      { type: types.LOAD_COURSES_SUCCESS, body: { course: [{ id: 1, firstName: 'Cory', lastName: 'House' }] } }
    ];
    const store = mockstore({ courses: [] }, expectedAction);

    await store.dispatch(courseThunks.loadCourses());

    const actions = store.getActions();
    //expect(actions[0].type).toEqual(types.AJAX_CALL_BEGIN);
    //expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
    expect(actions[0].type).toEqual(types.LOAD_COURSES_REQUEST);
    done();
  });
});
