import React, { FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { getFirestore, collection, doc, setDoc } from 'firebase/firestore';
import { closeModal } from '../../features/modals-slice';

export default function CreateTwit() {

  const dispatch = useDispatch();
  
  const input = React.createRef<HTMLTextAreaElement>();

  const db = getFirestore();

  async function createTwit(event: FormEvent) {
    event.preventDefault();
    const ref = doc(collection(db, 'twits'));
    setDoc(ref, {user: 'user01', text: input.current!.value, id: ref.id});
    dispatch(closeModal());
  };

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