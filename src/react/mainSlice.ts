import { createSlice } from '@reduxjs/toolkit';

export const mainSlice = createSlice({
  name: 'mainSlice',
  initialState: {
    show: false
  },
  reducers: {
    toggle: (state) => {
      state.show = !state.show;
    }
  }
});

export const { toggle } = mainSlice.actions;

export default mainSlice.reducer;