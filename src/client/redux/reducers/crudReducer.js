import { fromJS, List, Map } from 'immutable';
import { handleActions } from 'redux-actions';
import {
  loadSuccess,
  createSuccess,
  updateSuccess,
  removeRequest,
  removeSuccess
} from '../actions/crudActions';

const defaultState = new List();
const crudReducer = handleActions(
  {
    [loadSuccess]: (state, action) => fromJS(action.payload),
    [createSuccess]: (state, action) =>
      state.push(new Map(action.payload)),
    [updateSuccess]: (state, action) =>
      state.splice(
        state.findKey(course => course.get('id') === action.payload.id),
        1,
        new Map(action.payload)
      ),
    [removeRequest]: (state, action) => {
      action.payload.deleting = true;
      return state.splice(
        state.findKey(course => course.get('id') === action.payload.id),
        1,
        new Map(action.payload)
      );
    },
    [removeSuccess]: (state, action) =>
      state.splice(
        state.findKey(course => course.get('id') === action.payload.id),
        1
      )
  },
  defaultState
);

export default crudReducer;
