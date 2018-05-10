import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
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
    const { author, onChange, onSubmit, saving, error } = this.props;
    return (
      <form className="w-50 p-3" noValidate>
        <h1>Manage Author</h1>
        <TextInput
          name="firstName"
          label="FirstName"
          value={author.firstName}
          onChange={onChange}
          error={error.firstName} />

        <TextInput
          name="lastName"
          label="LastName"
          value={author.lastName}
          onChange={onChange}
          error={error.lastName} />

        <button
          disabled={saving}
          className="btn btn-primary float-right"
          onClick={onSubmit}
        >{saving ? 'Saving...' : 'Save'}</button>
      </form>
  );
  }
}

export default AuthorForm;
