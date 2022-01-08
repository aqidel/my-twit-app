import React from 'react';
import Twit from './Twit.jsx';
import { getFirestore, getDocs, query, onSnapshot, collection } from 'firebase/firestore';
import { useState, useEffect } from 'react';

export default function Feed() {

  const [state, setState] = useState([]);

  const db = getFirestore();

  // async function getTwits() {
  //   let queriedData = [];
  //   const snapshot = await getDocs(collection(db, 'tweets'));
  //   await snapshot.forEach(element => queriedData.push(element.data()));
  //   setState(queriedData);
  // }

  async function getTwits() {
    let temp = [];
    const queriedData = await query(collection(db, 'tweets'));
    await onSnapshot(queriedData, (querySnapshot) => {
      querySnapshot.forEach((elem) => {
        temp.push(elem.data());
      });
      setState(temp);
    });
  }

  useEffect(() => {
    getTwits();
  }, [state.length])

  return (
    <div id='feed'>
      {state.map((element, i) => {
        return <Twit text={element.text} key={i}/>
      })}
    </div>
  )
}