import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggle } from '../mainSlice';
import { TwitLogo, FeedLogo, MessagesLogo, ProfileLogo } from '../svg/SVGs';

export default function Navigation() {

  const dispatch = useDispatch();
  
  return (
    <div id='navigation'>
        <TwitLogo/>
      <nav>
        <Link className='link' to='/'>
          <div className='nav-items-wrap'>
            <FeedLogo/>
            <div className='nav-span-wrap'>
              <span>Лента</span>
            </div>
          </div>
        </Link>
        <div className='nav-items-wrap'>
          <MessagesLogo/>
          <div className='nav-span-wrap'>
            <span>Сообщения</span>
          </div>
        </div>
        <Link className='link' to='/profile'>
          <div className='nav-items-wrap'>
            <ProfileLogo/>
            <div className='nav-span-wrap'>
              <span>Профиль</span>
            </div>
          </div>
        </Link>
        <button onClick={() => dispatch(toggle())} id='create-twit-btn'>Твитнуть</button>
      </nav>
    </div>
  );
}