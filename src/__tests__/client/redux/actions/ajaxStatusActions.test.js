import  * as ajaxStatusActions from '../../../../client/redux/actions/ajaxStatusActions';

// Test sync action
describe('AJAX Status Actions', () => {
  describe('ajaxCallBegin', () => {
    it('Should create a AJAX_CALL_INCREMENT action', () => {
      //arrange
      const expectedAction = {
        type: 'AJAX_CALL_INCREMENT',
        payload: 1,
      };

      //act
      const action = ajaxStatusActions.ajaxCallIncrement();

      //assert
      expect(action).toEqual(expectedAction);
    });
  });

  describe('ajaxCallEnd', () => {
    it('Should create a AJAX_CALL_DECREMENT action', () => {
      //arrange
      const expectedAction = {
        type: 'AJAX_CALL_DECREMENT',
        payload: -1,
      };

      //act
      const action = ajaxStatusActions.ajaxCallDecrement();

      //assert
      expect(action).toEqual(expectedAction);
    });
  });
});
