import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { useFormWithValidation } from '../../utils/Validation';

function SignInPopup(props) {
  const validation = new useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onLogin(validation.values);
    validation.resetForm();
  };

  return (
    <PopupWithForm
      title='Sign in'
      name='signin'
      buttonText='Sign in'
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      onLinkClick={props.onLinkClick}
      disabledButton={!validation.isValid}
    >
      <label className='form__label'>
        Email
        <input
          required
          id='email-signin'
          name='email'
          value={validation.values.email || ''}
          type='email'
          onChange={(e) => validation.handleChange(e)}
          className='form__input'
          placeholder='Enter email'
        />
        <span
          className={`form__input-error name-error ${
            validation.errors.email && 'form__input-error_visible'
          }`}
        >
          {validation.errors.email}
        </span>
      </label>
      <label className='form__label'>
        Password
        <input
          required
          id='password-signin'
          name='password'
          type='password'
          value={validation.values.password || ''}
          onChange={(e) => validation.handleChange(e)}
          minLength='8'
          className='form__input'
          placeholder='Enter password'
        />
        <span
          className={`form__input-error password-error ${
            validation.errors.password && 'form__input-error_visible'
          }`}
        >
          {validation.errors.password}
        </span>
      </label>
    </PopupWithForm>
  );
}

export default SignInPopup;
