import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import Navigation from './Navigation';
import Feed from './Feed';
import Profile from './Profile';
import Sidebar from './Sidebar';
import CreateTwit from './modals/CreateTwit';
import Auth from './modals/Auth';
import Register from './modals/Register';
import RegisterBanner from './RegisterBanner';

import '../../styles/main.scss';

export default function App() {
  const logged = useSelector((state: RootState) => state.modals.logged);
  const show_create_twit = useSelector((state: RootState) => state.modals.show_create_twit);
  const show_auth = useSelector((state: RootState) => state.modals.show_auth);
  const show_register = useSelector((state: RootState) => state.modals.show_register);

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
      {show_create_twit ? <CreateTwit/> : null}
      {show_auth ? <Auth/> : null}
      {show_register ? <Register/> : null}
      {!logged ? <RegisterBanner/> : null}
    </>
  )
}