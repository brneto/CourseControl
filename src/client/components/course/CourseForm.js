import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, propTypes } from 'redux-form/immutable';
import { saveCourse } from '../../redux/thunks/courseThunks';
import {
  courseByIdSelector,
  authorsFormattedSelector
} from '../../redux/selectors';
import { required, minLength } from '../../utils/validations';
import { TextInput, Select } from '../commons';

const CourseForm = ({ authors, handleSubmit, pristine, reset, submitting }) => (
  <form onSubmit={handleSubmit} noValidate>
    <h1>Manage Course</h1>
    <Field name="id" component="input" type="hidden" />
    <Field name="title" component={TextInput} label="Title" />
    <Field
      name="authorId"
      component={Select}
      label="Author"
      options={authors}
    />
    <Field name="category" component={TextInput} label="Category" />
    <Field name="duration" component={TextInput} label="Duration" />

    <button
      className="btn btn-primary float-right ml-3"
      disabled={submitting}
    >
      {submitting ? 'Saving...' : 'Save'}
    </button>
    <button
      className="btn btn-secondary float-right"
      type="button"
      disabled={pristine || submitting}
      onClick={reset}
    >
      Clear
    </button>
  </form>
);

CourseForm.propTypes = { ...propTypes };

const validate = values => {
  const errors = {};
  const minLength5 = minLength(5);
  const title = values.get('title');

  errors.title = required(title);
  if(!errors.title)
    errors.title = minLength5(title);

  return errors;
};

const onSubmit = (values, dispatch, { form }) =>
  dispatch(saveCourse(values, form));

const mapStateToProps = state => ({
  initialValues: courseByIdSelector(state),
  authors: authorsFormattedSelector(state)
});

export default connect(mapStateToProps)(
  reduxForm({
    form: 'course',
    enableReinitialize: true,
    onSubmit,
    validate
  })(CourseForm)
);
