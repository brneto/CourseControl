import React from 'react';
import { mount } from 'enzyme';
import ManageCoursePage from '../../../../client/components/course/ManageCoursePage';

function setup() {
  const props = {
    course: { id: '', watchHref: '', title: '', author: '', length: '', category: '' },
    authors: [],
    actions: { saveCourse: () => Promise.resolve() },
    goToRoute: () => '/courses',
    saving: false,
  };

  return mount(<ManageCoursePage.WrappedComponent {...props} />);
}

describe('Manage Course Page', () => {
  it('sets error message when trying to save empty title', () => {
    const wrapper = setup();
    const saveButton = wrapper.find('button');
    saveButton.simulate('click');
    expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');
  });
});

