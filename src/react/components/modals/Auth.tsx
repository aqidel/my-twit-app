import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeModal, showRegister } from '../../features/modals-slice';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default function Auth() {
  const initialFormData = {
    email: '',
    password: '',
  };
  const [formData, setFormData] = useState(initialFormData);
  const dispatch = useDispatch();

  function auth(event: any) {
    event.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  return (
    <div className='modal-wrap'>
      <div className='modal'>
        <div className='close-modal' onClick={() => dispatch(closeModal())}>
          <svg viewBox='0 0 24 24' aria-hidden='true'>
            <g>
              <path d='M13.414 12l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L12 10.586 6.207 4.793c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L10.586 12l-5.793 5.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L12 13.414l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L13.414 12z'/>
            </g>
          </svg>
        </div>
        <p className='auth-text'>
          Не зарегистрированы? 
          <span className='auth-link' onClick={() => dispatch(showRegister())}>Зарегистрироваться</span>
        </p>
        <form onSubmit={(event) => auth(event)}>
          <div className='auth-wrap'>
            <input 
              className='auth-email' 
              type='email' 
              placeholder='E-mail:'
              value={formData.email}
              onChange={(event) => setFormData({...formData, email: event.target.value})}
            />
            <input 
              className='auth-password' 
              type='password' 
              placeholder='Password:'
              value={formData.password}
              onChange={(event) => setFormData({...formData, password: event.target.value})}
            />
          </div>
          <input 
            className='auth-submit' 
            type='submit' 
            value='Авторизация'
          />
        </form>
      </div>
    </div>
  )
}