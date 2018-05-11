import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ input, meta: { touched, error }, label, options }) => {

  return (
    <div className="form-group">
      <label htmlFor={input.name}>{label}</label>
      <div className="field">
        <select className="form-control" {...input}>
          <option />
          {options.map(option => (
            <option key={option.get('value')} value={option.get('value')}>
              {option.get('content')}
            </option>
          ))}
        </select>
        {touched && error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

Select.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.object.isRequired,
};

export default Select;
