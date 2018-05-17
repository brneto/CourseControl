import { fromJS } from 'immutable';
import { authorsFormattedSelector } from '../../../../client/redux/selectors/authorSelectors';

describe('Author Selectors', () => {
  describe('authorsFormattedForDropdown', () => {
    it('should return author data formatted for use in a dropdown', () => {
      const state = fromJS({
        authors: [
          { id: 'cory-house', firstName: 'Cory', lastName: 'House' },
          { id: 'scott-allen', firstName: 'Scott', lastName: 'Allen' },
        ]
      });

      const expected = fromJS([
        {
          id: 'cory-house',
          firstName: 'Cory',
          lastName: 'House',
          fullName: 'Cory House'
        },
        {
          id: 'scott-allen',
          firstName: 'Scott',
          lastName: 'Allen',
          fullName: 'Scott Allen'
        }
      ]);

      expect(authorsFormattedSelector(state)).toEqual(expected);
    });
  });
});
