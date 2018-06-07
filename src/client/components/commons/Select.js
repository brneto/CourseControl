import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ input, meta: { touched, error }, label, options }) => (
  <div className="form-group">
    <label htmlFor={input.name}>{label}</label>
    <div className="field">
      <select className="form-control" {...input}>
        <option disabled />
        {options.map(option => (
          <option key={option.get('id')} value={option.get('id')}>
            {option.get('fullName')}
          </option>
        ))}
      </select>
      {touched && error && <div className="alert alert-danger">{error}</div>}
    </div>
  </div>
);

Select.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.object.isRequired
};

export default Select;
