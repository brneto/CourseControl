// import React from 'react';
// import { mount } from 'enzyme';
// import ManageCoursePage from '../../../../client/components/course/oldManageCoursePage';

// function setup() {
//   const props = {
//     course: { id: '', watchHref: '', title: '', author: '', duration: '', category: '' },
//     authors: [],
//     actions: { saveCourse: () => Promise.resolve() },
//     goToRoute: () => '/courses',
//     saving: false,
//   };

//   return mount(<ManageCoursePage.WrappedComponent {...props} />);
// }

// describe('Manage Course Page', () => {
//   it('sets error message when trying to save empty title', () => {
//     const wrapper = setup();
//     const saveButton = wrapper.find('button');
//     saveButton.simulate('click');
//     expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');
//   });
// });

// TODO:
// Create a new test to this removed component
describe('Manage Course Page', () => {
  it('Remember to make a real test in place of removed component', () => {
    expect(true).toBe(true);
  });
});
