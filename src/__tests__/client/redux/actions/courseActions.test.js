import  * as courseActions from '../../../../client/redux/actions/courseActions';

// Test sync action
describe('Course Actions', () => {
  describe('createCourseSuccess', () => {
    it('Should create a CREATE_COURSE_SUCCESS action', () => {
      //arrange
      const course = { id: 'clean-code', title: 'Clean Code' };
      const expectedAction = {
        type: 'CREATE_COURSE_SUCCESS',
        payload: { course },
      };

      //act
      const action = courseActions.createCourseSuccess(course);

      //assert
      expect(action).toEqual(expectedAction);
    });
  });
});
