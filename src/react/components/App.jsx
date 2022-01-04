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
        <div id='left-fixed-wrap'>
          <Navigation/>
        </div>
        <Routes>
          <Route path='/' element={
            <>
              <Feed/>
              <div id='right-fixed-wrap'>
                <Sidebar/>
              </div>
            </>}>
          </Route>
          <Route path='messages' element={
            <>
              <Messages/>
              <div id='right-fixed-wrap'>
                <Chat/>
              </div>
            </>}>
          </Route>
          <Route path='profile' element={
            <>
              <Profile/>
              <div id='right-fixed-wrap'>
                <Sidebar/>
              </div>
            </>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}