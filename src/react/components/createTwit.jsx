import React from 'react';
import { useDispatch } from 'react-redux';
import { toggle } from '../mainSlice';

export default function CreateTwit() {
  
  const dispatch = useDispatch();

  const input = React.createRef();

  function handleSubmit(event) {
    event.preventDefault();
    console.log(input.current.value)
  };

  return (
    <div id='modal-wrap'>
      <div id='modal'>
        <form onSubmit={(event) => handleSubmit(event)}>
          <input type='text' ref={input}/>
          <input type='submit'/>
          <button onClick={() => dispatch(toggle())}>Закрыть</button>
        </form>
      </div>
    </div>
  )
}