import React from 'react';
import Twit from './Twit';
import { getFirestore, query, onSnapshot, collection } from 'firebase/firestore';
import { useState, useEffect } from 'react';

export default function Feed() {

  const [state, setState] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const path = query(collection(db, 'twits'));
    onSnapshot(path, (querySnapshot) => {
      const temp = [];
      querySnapshot.forEach((element) => {
        temp.push(element.data());
      })
      setState([...temp]);
    })
    console.log('useEffect run!')
  }, [])

  return (
    <div id='feed'>
      {state.map((element, i) => {
        return <Twit text={element.text} user={element.user} id={element.id} key={i}/>
      })}
    </div>
  )
}