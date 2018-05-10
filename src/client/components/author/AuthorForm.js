import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import TextInput from '../common/TextInput';

const required = value => value ? undefined : 'Required';
const minLength = min => value =>
  value && value.length < min
    ? `Must have at least ${min} characters.`
    : undefined;
const minLength5 = minLength(5);

const validate = values => {
  const errors = {};
  const firstName = values.get('firstName');
  const lastName = values.get('lastName');

  errors.firstName = required(firstName);
  errors.lastName = required(lastName);

  if(!errors.firstName)
    errors.firstName = minLength5(firstName);

  return errors;
};

@reduxForm({ form: 'author', validate, enableReinitialize: true })
class AuthorForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    reset: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
  };

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form className="w-50 p-3" onSubmit={handleSubmit} noValidate>
        <h1>Manage Author</h1>
        <Field name="id" component="input" type="hidden" />
        <Field name="firstName" component={TextInput} label="FirstName" />
        <Field name="lastName" component={TextInput} label="LastName" />
        <button
          className="btn btn-primary float-right"
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
  }
}

export default AuthorForm;
