import React from 'react';
import { useDispatch } from 'react-redux';
import { showAuth, showRegister } from '../features/modals-slice';

export default function RegisterBanner() {

  const dispatch = useDispatch();

  return (
    <div id='register-banner'>
      <span>Зарегистрируйтесь или авторизуйтесь!</span>
      <button id='auth' onClick={() => dispatch(showAuth())}>Войти</button>
      <button id='register' onClick={() => dispatch(showRegister())}>Зарегистрироваться</button>
    </div>
  )
}