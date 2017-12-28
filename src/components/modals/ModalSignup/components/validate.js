const validate = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = 'Please enter your first name';
  }

  if (!values.lastName) {
    errors.lastName = 'Please enter your last name';
  }

  if (!values.contactNumber) {
    errors.contactNumber = 'Please enter a contact number';
  } else if (values.contactNumber.length < 10) {
    errors.contactNumber = 'Must be at least 10 numbers';
  }

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
