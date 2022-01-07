import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Navigation from './Navigation.jsx';
import Feed from './Feed.jsx';
import Profile from './Profile.jsx';
import Sidebar from './Sidebar.jsx';
import CreateTwit from './createTwit.jsx';

import '../../styles/main.scss';

export default function App() {
  const toggle = useSelector((state) => state.main.show);

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
      {toggle ? <CreateTwit/> : null}
    </>
  )
}