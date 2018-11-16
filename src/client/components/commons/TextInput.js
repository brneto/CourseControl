import React from 'react';
import PropTypes from 'prop-types';

const setErrorStyle = b => b ? ' has-error' : '';
const TextInput = ({ input, meta: { touched, error }, label }) => (
  <div className={`form-group${setErrorStyle(touched && error)}`}>
    <label htmlFor={input.name}>{label}</label>
    <div className="field">
      <input
        {...input}
        type="text"
        placeholder={label}
        className="form-control"
      />
      {touched && error && <div className="alert alert-danger">{error}</div>}
    </div>
  </div>
);

TextInput.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired
};

export default TextInput;
