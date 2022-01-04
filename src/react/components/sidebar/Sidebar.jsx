import React from 'react';
import avatar from '../../../images/avatar.png';

export default function Sidebar() {
  return (
    <div id='sidebar'>
      <div id='users-list'>
        <p>Пользователи</p>
        <div className='sb-subscribe-wrap'>
          <div className='sb-user'>
            <img className='sb-avatar' src={avatar}/>
            <span className='sb-username'>Username</span>
          </div>
          <button className='sb-subscribe'>Читать</button>
        </div>
      </div>
    </div>
  )
}