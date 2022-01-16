import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';
import Navigation from './Navigation';
import Feed from './Feed';
import Profile from './Profile';
import Sidebar from './Sidebar';
import CreateTwit from './createTwit';

import '../../styles/main.scss';

export default function App() {
  const toggle = useSelector((state: RootState) => state.main.show);

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