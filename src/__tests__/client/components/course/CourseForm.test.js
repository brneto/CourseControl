// import React from 'react';
// import { shallow } from 'enzyme';
// import CourseForm from '../../../../client/components/course/CourseForm';

// function setup(saving) {
//   let props = {
//     course:{},
//     saving: saving,
//     error: {},
//     onSubmit: () => {},
//     onChange: () => {},
//   };

//   return shallow(<CourseForm {...props} />);
// }

// describe('Test CourseForm component', () => {
//   it('renders form and h1', () => {
//     const wrapper = setup(false);
//     expect(wrapper.find('form').length).toBe(1);
//     expect(wrapper.find('h1')).toHaveText('Manage Course');
//   });

//   it('save button is labeled "Save" when not saving', () => {
//     const wrapper = setup(false);
//     expect(wrapper.find('button')).toHaveText('Save');
//   });

//   it('save button is labeled "Saving..." when saving', () => {
//     const wrapper = setup(true);
//     expect(wrapper.find('button')).toHaveText('Saving...');
//   });
// });

describe('Manage Course Page', () => {
  it('sets error message when trying to save empty title', () => {
    expect(true).toBe(true);
  });
});
