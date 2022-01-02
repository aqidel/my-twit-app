import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navigation from './navigation/Navigation.jsx';
import Chat from './chat/Chat.jsx';
import Feed from './feed/Feed.jsx';
import Messages from './messages/Messages.jsx';
import Profile from './profile/Profile.jsx';
import Sidebar from './sidebar/Sidebar.jsx';

import './main.scss';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path='/' element={<><Feed/><Sidebar/></>}/>
          <Route path='messages' element={<><Messages/><Chat/></>}/>
          <Route path='profile' element={<><Profile/><Sidebar/></>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}