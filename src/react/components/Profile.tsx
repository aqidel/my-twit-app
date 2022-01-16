import React from 'react';
import Twit from './Twit';

let temp = [{text: 'test'}];

export default function Profile() {
  return (
    <div id='profile'>
      <div id='main-info'>
        <div id='p-avatar'></div>
        <span id='p-username'>Username</span>
      </div>
      <div id='my-twits'>
        {temp.map((element, i) => {
          return <Twit text={element.text} key={i}/>
        })}
      </div>
    </div>
  )
}