import React, { FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { getFirestore, collection, doc, setDoc } from 'firebase/firestore';
import { toggle } from '../mainSlice';
import { CloseBtn } from '../svg/SVGs';

export default function CreateTwit() {
  
  const dispatch = useDispatch();

  const input = React.createRef<HTMLTextAreaElement>();

  const db = getFirestore();

  async function createTwit(event: FormEvent) {
    event.preventDefault();
    const ref = doc(collection(db, 'twits'));
    setDoc(ref, {user: 'user01', text: input.current!.value, id: ref.id});
    dispatch(toggle());
  };

  return (
    <div className='modal-wrap'>
      <div id='modal'>
        <div id='close-modal' onClick={() => dispatch(toggle())}>
          <CloseBtn/>
        </div>
        <div id='create-twit-wrap'>
          <div id='create-twit-avatar'></div>
          <form onSubmit={(event) => createTwit(event)}>
            <textarea id='textarea' 
                      rows={7} 
                      cols={35} 
                      ref={input} 
                      placeholder='Чем Вы хотите поделиться?'>
            </textarea>
            <input id='submit-btn' type='submit'/>
          </form>
        </div>
      </div>
    </div>
  )
}