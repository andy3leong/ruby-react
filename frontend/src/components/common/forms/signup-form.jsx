
import React from 'react';
import { Link } from 'react-router';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'recompose';
import { Form, Button } from 'reactstrap';

import { EnhancedInput } from '../../common';
import { validators } from '../../../helpers';

const enhance = compose(
  reduxForm({
    form: 'signupForm',
    validate(values) {
      const errors = {};

      if (values.password && values.password.length > 0 &&
        values.password !== values.password_confirmation) {
        errors.password_confirmation = 'Please double check your password';
      }

      return errors;
    },
  }),
);

export default enhance(({
  handleSubmit,
  onSubmit,
  isSubmitting,
}) => (
  <Form
    name="signup-form"
    onSubmit={handleSubmit(onSubmit)}
  >
    <h2>Please Register</h2>

    <Field
      name="email"
      component={EnhancedInput}
      type="email"
      placeholder="Email address"
      label="Email Address"
      validate={[validators.required]}
    />
    <Field
      name="password"
      component={EnhancedInput}
      type="password"
      label="Password"
      validate={[validators.required]}
    />
    <Field
      name="password_confirmation"
      component={EnhancedInput}
      type="password"
      label="Confirm Password"
    />
    <Button type="submit" color="primary" disabled={isSubmitting}>Register</Button>
    <div>Have an account? <Link to="/login">Login</Link></div>
  </Form>
));
