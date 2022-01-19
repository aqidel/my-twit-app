import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';
import Navigation from './Navigation';
import Feed from './Feed';
import Profile from './Profile';
import Sidebar from './Sidebar';
import Modal from './modals/Modal';
import RegisterBanner from './RegisterBanner';

import '../../styles/main.scss';

export default function App() {
  const toggle = useSelector((state: RootState) => state.main.show);
  const logged = useSelector((state: RootState) => state.main.logged);

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
      {toggle ? <Modal/> : null}
      {!logged ? <RegisterBanner/> : null}
    </>
  )
}