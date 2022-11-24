import React from 'react';
import { Link } from 'react-router-dom';

function InfoTooltip({ isOpen, onClose, TooltipStatus, onSignInCLick }) {
  const handelLinkCLick = () => {
    onClose();
    onSignInCLick();
  };

  return (
    <div className={isOpen ? `popup popup_open` : `popup`}>
      <div className='popup__container popup__container_type_tooltip'>
        <button
          className='popup__close-button'
          type='button'
          aria-label='close'
          onClick={onClose}
        ></button>
        <div className='popup__tooltip-content'>
          <h2 className='popup__title popup__title_type_tool-tip'>
            {
              TooltipStatus
                ? 'Registration successfully completed!' // only for sign up
                : 'Oops, authorization faild Please try again.' // only for sign in
            }
          </h2>
          <Link to='/signin' className='form__link' onClick={handelLinkCLick}>
            {
              // sign-in after register or try again after sign in faild
              TooltipStatus ? 'Sign in' : 'Try again' 
            }
          </Link>
        </div>
      </div>
    </div>
  );
}

export default InfoTooltip;
