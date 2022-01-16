import React from 'react';

export default function Sidebar() {
  return (
    <div id='sidebar'>
      <div id='users-list'>
        <p>Пользователи</p>
        <div className='sb-subscribe-wrap'>
          <div className='sb-user'>
            <div className='sb-avatar'></div>
            <span className='sb-username'>Username</span>
          </div>
          <button className='sb-subscribe'>Читать</button>
        </div>
      </div>
    </div>
  )
}