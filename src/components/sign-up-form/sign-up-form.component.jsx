import { useState } from 'react';
import { createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
    } catch (error) {
      console.error(error);
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
    <div>
      <h1>Sign up with your email and passowrd</h1>
      <form onSubmit={handleSubmit}>
        <label>Display name</label>
        <input
          name='displayName'
          type='text'
          value={displayName}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          name='email'
          type='email'
          value={email}
          onChange={handleChange}
          required
        />

        <label>Password</label>
        <input
          name='password'
          type='password'
          value={password}
          onChange={handleChange}
          required
        />

        <label>Confirm Password</label>
        <input
          name='confirmPassword'
          type='password'
          value={confirmPassword}
          onChange={handleChange}
          required
        />

        <button type='submit'>Sign up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
