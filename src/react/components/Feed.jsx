import React from 'react';
import Twit from './Twit.jsx';
import twits from '../../data.json';

export default function Feed() {
  return (
    <div id='feed'>
      {twits.twits.map((element, i) => {
        return <Twit text={element.text} key={i}/>
      })}
    </div>
  )
}