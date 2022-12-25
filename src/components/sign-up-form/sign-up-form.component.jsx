import { useState } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import './sign-up-form.styles.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      console.log(error);

      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user. Email already in use');
      }
    }
  };

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  return (
    <div className='sign-up-form-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and passowrd</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Display name'
          name='displayName'
          type='text'
          value={displayName}
          onChange={handleChange}
          required
        />

        <FormInput
          label='Email'
          name='email'
          type='email'
          value={email}
          onChange={handleChange}
          required
        />

        <FormInput
          label='Password'
          name='password'
          type='password'
          value={password}
          onChange={handleChange}
          required
        />

        <FormInput
          label='Confirm password'
          name='confirmPassword'
          type='password'
          value={confirmPassword}
          onChange={handleChange}
          required
        />

        <Button buttonType='google' type='submit'>
          Sign up
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
