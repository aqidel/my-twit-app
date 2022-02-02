import { createSlice } from '@reduxjs/toolkit';

export const modalsSlice = createSlice({
  name: 'modalsSlice',
  initialState: {
    logged: false,
    show_create_twit: false,
    show_auth: false,
    show_register: false,
  },
  reducers: {
    closeModal: state => {
      state.show_create_twit = false;
      state.show_auth = false;
      state.show_register = false;
    },
    showAuth: state => {
      if (!state.logged) {
        state.show_register = false;
        state.show_auth = true;
      }
    },
    showRegister: state => {
      if (!state.logged) {
        state.show_auth = false;
        state.show_register = true;
      }
    },
    showCreateTwit: state => {
      if (state.logged) {
        state.show_create_twit = true;
      } else {
        state.show_auth = true;
      }
    },
  }
});

export const { closeModal, showAuth, showRegister, showCreateTwit } = modalsSlice.actions;

export default modalsSlice.reducer;