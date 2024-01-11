import { createSlice } from '@reduxjs/toolkit';

const bikeSlice = createSlice({
  name: 'bikeState',
  initialState: {
    modal: false,
    bikes: [],
  },
  reducers: {
    bikeList(state, action) {
      return state.bikes;
    },
  },
});
export const { modalShow, bikeList } = bikeSlice.actions;

export const bikeReducer = bikeSlice.reducer;
