import React from 'react';
import { createBrowserHistory } from 'history';
import { mount } from 'enzyme';
import { createStore } from 'redux';
import { fromJS } from 'immutable';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux-immutable';
import {
  reducer as form,
  startSubmit,
  stopSubmit,
  getFormSyncErrors
} from 'redux-form/immutable';
import {
  connectRouter as addRouterReducer
} from 'connected-react-router/immutable';
import courses from '../../../../client/redux/reducers/courseReducer';
import authors from '../../../../client/redux/reducers/authorReducer';
import CourseForm from '../../../../client/components/course/CourseForm';

function makeStore(initial = {}, logger) {
  const reducers = addRouterReducer(createBrowserHistory())(
    combineReducers({ courses, authors, form })
  );
  const preloadedState = fromJS({ form: initial });
  if (logger) {
    reducers.logger = logger;
  }
  return createStore(reducers, preloadedState);
}

const logger = jest.fn((state = {}) => state);
const store = makeStore({}, logger);
const getWrapper = store =>
  mount(
    <Provider store={store}>
      <CourseForm />
    </Provider>
  );
const wrapper = getWrapper(store);
const formName = 'course';

describe('CourseForm', () => {
  it('renders form and h1', () => {
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('h1')).toHaveText('Manage Course');
  });

  it('save button is labeled "Saving..." when saving', () => {
    store.dispatch(startSubmit(formName));

    expect(wrapper.find('button.btn-primary')).toHaveText('Saving...');
  });

  it('save button is labeled "Save" when not saving', () => {
    store.dispatch(stopSubmit(formName));

    expect(wrapper.find('button.btn-primary')).toHaveText('Save');
  });

  it('sets error message when trying to save empty title', () => {
    const saveButton = wrapper.find('button.btn-primary');
    saveButton.simulate('click');
    const errors = getFormSyncErrors(formName)(store.getState());

    expect(errors.title).toBe('Required');
  });
});
