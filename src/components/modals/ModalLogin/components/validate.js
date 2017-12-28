const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Please enter a email address';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!values.password) {
    errors.password = 'Please enter a password';
  } else if (values.password.length < 7) {
    errors.password = 'Must be at least 7 characters';
  }

  return errors;
};

export default validate;
