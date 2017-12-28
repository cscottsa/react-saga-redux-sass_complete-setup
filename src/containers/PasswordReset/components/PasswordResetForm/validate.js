const validate = (values) => {
  const errors = {};

  if (!values.password) {
    errors.password = 'Please enter a password';
  } else if (values.password.length < 7) {
    errors.password = 'Must be at least 7 characters';
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = 'Please enter a password';
  } else if (values.confirmPassword.length < 7) {
    errors.confirmPassword = 'Must be at least 7 characters';
  }

  if (values.password && values.confirmPassword) {
    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
  }

  return errors;
};

export default validate;
