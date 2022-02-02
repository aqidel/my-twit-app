import React from 'react';
import { getFirestore, doc, deleteDoc } from 'firebase/firestore';
import { CommentIcon, RetwitIcon, LikeIcon } from '../svg/SVGs';

interface Props {
  id: string;
  user: string;
  text: string;
}

export default function Twit(props: Props) {
  
  async function deleteTwit() {
    const db = getFirestore();
    await deleteDoc(doc(db, 'twits', `${props.id}`));
  }

  return (
    <div className='twit-wrap'>
      <div className='twit-avatar'/>
      <div className='twit-content'>
        <p className='twit-username'>
          {props.user}
        </p>
        <p className='twit-text'>
          {props.text}
        </p>
        <div className='twit-bottom'>
          <div className='twit-comment-wrap'>
            <CommentIcon/>
            <span>0</span>
          </div>
          <div className='twit-retwit-wrap'>
            <RetwitIcon/>
            <span>0</span>
          </div>
          <div className='twit-like-wrap'>
            <LikeIcon/>
            <span>0</span>
          </div>
        </div>
      </div>
      <div className='twit-delete-wrap'>
        <div className='delete-twit' onClick={() => deleteTwit()}>
          <svg viewBox='0 0 24 24' aria-hidden='true'>
            <g>
              <path d='M13.414 12l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L12 10.586 6.207 4.793c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L10.586 12l-5.793 5.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L12 13.414l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L13.414 12z'/>
            </g>
          </svg>
        </div>
      </div>
    </div>
  )
}