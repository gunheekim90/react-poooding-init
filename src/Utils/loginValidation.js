import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
  let errors = {};
  // console.log("[In Login Validation]");
  // console.log(data)
  if (data.email == '') {
    errors.email = 'This field is required';
  }

  if (data.password == '') {
    errors.password = 'This field is required';
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'This is not email format';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}