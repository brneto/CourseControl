import React from 'react';
import PropTypes from 'prop-types';

const SelectInput = ({ children, input, label, meta: { touched, error } }) => {

  return (
    <div className="form-group">
      <label htmlFor={input.name}>{label}</label>
      <div className="field">
        <select className="form-control" {...input}>
          {children}
        </select>
        {touched && error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

SelectInput.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired
};

export default SelectInput;
