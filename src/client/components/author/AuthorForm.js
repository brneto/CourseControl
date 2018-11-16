import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, propTypes } from 'redux-form/immutable';
import { authorByIdSelector } from '../../redux/selectors';
import { saveAuthor } from '../../redux/thunks/authorThunks';
import { required } from '../../utils/validations';
import { TextInput } from '../commons';

const AuthorForm = ({ handleSubmit, pristine, reset, submitting }) => (
  <form className="w-50 p-3" onSubmit={handleSubmit} noValidate>
    <h1>Manage Author</h1>
    <Field name="id" component="input" type="hidden" />
    <Field name="firstName" component={TextInput} label="FirstName" />
    <Field name="lastName" component={TextInput} label="LastName" />
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

AuthorForm.propTypes = { ...propTypes };

const mapStateToProps = state => ({
  initialValues: authorByIdSelector(state),
});

const validate = values => {
  const errors = {};
  const firstName = values.get('firstName');
  const lastName = values.get('lastName');

  errors.firstName = required(firstName);
  errors.lastName = required(lastName);

  return errors;
};

const onSubmit = (values, dispatch, { form }) =>
  dispatch(saveAuthor(values, form));

export default connect(mapStateToProps)(
  reduxForm({
    form: 'author',
    enableReinitialize: true,
    onSubmit,
    validate
  })(AuthorForm)
);
