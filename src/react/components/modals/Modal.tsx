import React from 'react';
import { useDispatch } from 'react-redux';
import { toggle } from '../../mainSlice';
import { CloseBtn } from '../../svg/SVGs';
import CreateTwit from './CreateTwit';
import Auth from './Auth';

export default function Modal() { 
  
  const dispatch = useDispatch();

  return (
    <div className='modal-wrap'>
      <div id='modal'>
        <div id='close-modal' onClick={() => dispatch(toggle())}>
          <CloseBtn/>
        </div>
        {
          <CreateTwit/>
        }
      </div>
    </div>
  )
}