import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ input, label, meta: { touched, error } }) => {
  //const { input, name, label, onChange, placeholder, value, error } = props;
  let wrapperClass = 'form-group';

  //if(typeof error !== undefined && error.length > 0) {
  if(touched && error) {
    wrapperClass += ' has-error';
  }

  return (
    <div className={wrapperClass}>
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
};

TextInput.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired
};

export default TextInput;
