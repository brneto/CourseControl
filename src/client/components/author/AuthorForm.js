import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, propTypes } from 'redux-form/immutable';
import { saveAuthor } from '../../redux/thunks/authorThunks';
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

const onSubmit = (values, dispatch, props) => {
  // TODO:
  // Use redux-form start/stopSubmit actionCreators
  // to make the form aware of the save requested
  console.log('props.form:', props.form);
  dispatch(saveAuthor(values.toJS(), props.form));
};

@reduxForm({ form: 'author', onSubmit, validate, enableReinitialize: true })
class AuthorForm extends Component {
  static propTypes = { ...propTypes };

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form className="w-50 p-3" onSubmit={handleSubmit} noValidate>
        <h1>Manage Author</h1>
        <h1>{submitting}</h1>
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
