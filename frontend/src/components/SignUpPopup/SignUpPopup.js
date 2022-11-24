import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { useFormWithValidation } from '../../utils/Validation';

function SignUpPopup(props) {
  const validation = new useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onRegister(validation.values);
    // reset the inputs only after success
    if (props.showError) {
      console.log(props.showError)
      validation.resetForm();
    }
  };

  return (
    <PopupWithForm
      title='Sign up'
      name='signup'
      buttonText='Sign up'
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      onLinkClick={props.onLinkClick}
      disabledButton={!validation.isValid}
      showError={props.showError}
    >
      <label className='form__label'>
        Email
        <input
          required
          id='email'
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
          id='password'
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
      <label className='form__label'>
        Username
        <input
          required
          id='username'
          name='username'
          type='text'
          value={validation.values.username || ''}
          onChange={(e) => validation.handleChange(e)}
          minLength='2'
          maxLength='30'
          className='form__input'
          placeholder='Enter your username'
        />
        <span
          className={`form__input-error username-error ${
            validation.errors.username && 'form__input-error_visible'
          }`}
        >
          {validation.errors.username}
        </span>
      </label>
    </PopupWithForm>
  );
}

export default SignUpPopup;
