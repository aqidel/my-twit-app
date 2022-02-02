import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showCreateTwit } from '../features/modals-slice';
import { TwitLogo, FeedLogo, MessagesLogo, ProfileLogo } from '../svg/SVGs';

export default function Navigation() {

  const dispatch = useDispatch();
  
  return (
    <div id='navigation-wrap'>
        <TwitLogo/>
      <nav>
        <Link className='link' to='/'>
          <div className='link-items'>
            <FeedLogo/>
            <p>Лента</p>
          </div>
        </Link>
        <div className='link-items'>
          <MessagesLogo/>
          <p>Сообщения</p>
        </div>
        <Link className='link' to='/profile'>
          <div className='link-items'>
            <ProfileLogo/>
            <p>Профиль</p>
          </div>
        </Link>
        <button onClick={() => dispatch(showCreateTwit())} id='create-twit-btn'>Твитнуть</button>
      </nav>
    </div>
  );
}