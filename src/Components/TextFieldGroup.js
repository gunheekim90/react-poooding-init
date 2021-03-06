import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextFieldGroup = ({ field, value, label, error, type, onChange, checkUserExists }) => {

  return (

      <div className={classnames('form-group', { 'has-error': error })} style={{color : '#fff',fontWeight : '100'}}>
        <label className="control-label" style={{color : '#fff'}}>{label}</label>
        <input
          
          onChange={onChange}
          onBlur={checkUserExists}
          value={value}
          type={type}
          name={field}
          className="form-control"
        />
      {error && <span className="help-block" style={{color : '#fff'}}>{error}</span>}
      </div>  
    );
}

TextFieldGroup.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checkUserExists: PropTypes.func
}

TextFieldGroup.defaultProps = {
  type: 'text'
}

export default TextFieldGroup;