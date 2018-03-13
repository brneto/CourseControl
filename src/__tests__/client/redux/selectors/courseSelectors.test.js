import { fromJS } from 'immutable';
import { courseByIdSelector } from '../../../../client/redux/selectors/courseSelectors';

describe('Course Selectors', () => {
  describe('courseByIdSelector', () => {
    const state = fromJS({
      courses: [
        { id: 'clean-code', title: 'Clean Code' },
        { id: 'design-pattern', title: 'Design Pattern' },
      ],
      router: {
        location: {
          pathname: '/course/design-pattern'
        }
      }
    });

    it('should return course with params informed from list courses', () => {
      //arrange
      const expected = { id: 'design-pattern', title: 'Design Pattern' };

      //act
      const course = courseByIdSelector(state);

      //assert
      expect(course).toEqual(expected);
    });
  });
});
