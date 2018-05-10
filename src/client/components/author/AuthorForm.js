import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import submit from './validateSubmit';
import TextInput from '../common/TextInput';


@reduxForm({ form: 'author' })
class AuthorForm extends Component {
  static propTypes = {
    author: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    saving: PropTypes.bool,
    error: PropTypes.object,
  };

  render () {
    const { handleSubmit, submitting } = this.props;
    return (
      <form
        className="w-50 p-3"
        onSubmit={handleSubmit(submit)}
        noValidate
      >
        <h1>Manage Author</h1>
        <Field
          name="firstName"
          component={TextInput}
          label="FirstName"
        />

        <Field
          name="lastName"
          component={TextInput}
          label="LastName"
        />
        <button
          className="btn btn-primary float-right"
          disabled={submitting}
        >
          {submitting ? 'Saving...' : 'Save'}
        </button>
      </form>
  );
  }
}

export default AuthorForm;
