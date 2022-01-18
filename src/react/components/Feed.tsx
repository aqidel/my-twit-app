import React from 'react';
import Twit from './Twit';
import { getFirestore, query, onSnapshot, collection, DocumentData } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { TwitLogo } from '../svg/SVGs';

export default function Feed() {

  const [state, setState] = useState<DocumentData[]>([]);

  useEffect(() => {
    const db = getFirestore();
    const path = query(collection(db, 'twits'));
    onSnapshot(path, (querySnapshot) => {
      const temp: DocumentData[] = [];
      querySnapshot.forEach((element) => {
        temp.push(element.data());
      })
      setState([...temp]);
    })
    console.log('useEffect run!')
  }, [])

  return (
    <div id='feed'>
      <div id='feed-logo-wrap'>
        <TwitLogo/>
      </div>
      {state.map((element, i) => {
        return <Twit text={element.text} user={element.user} id={element.id} key={i}/>
      })}
    </div>
  )
}