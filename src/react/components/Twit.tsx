import React from 'react';
import { getFirestore, doc, deleteDoc } from 'firebase/firestore';
import { CloseBtn, CommentIcon, RetwitIcon, LikeIcon } from '../svg/SVGs';

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
          <CloseBtn/>
        </div>
      </div>
    </div>
  )
}