import  * as ajaxStatusActions from '../../../../client/redux/actions/ajaxStatusActions';

// Test sync action
describe('AJAX Status Actions', () => {
  describe('ajaxCallBegin', () => {
    it('Should create a AJAX_CALL_BEGIN action', () => {
      //arrange
      const expectedAction = {
        type: ajaxStatusActions.types.AJAX_CALL_BEGIN,
      };

      //act
      const action = ajaxStatusActions.ajaxCallBegin();

      //assert
      expect(action).toEqual(expectedAction);
    });
  });

  describe('ajaxCallEnd', () => {
    it('Should create a AJAX_CALL_END action', () => {
      //arrange
      const expectedAction = {
        type: ajaxStatusActions.types.AJAX_CALL_END,
      };

      //act
      const action = ajaxStatusActions.ajaxCallEnd();

      //assert
      expect(action).toEqual(expectedAction);
    });
  });
});
