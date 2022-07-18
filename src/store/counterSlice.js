

import { createSlice } from '@reduxjs/toolkit';

const initialCounterStates = { counter: 0, showCounter: true };
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterStates,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement (state) {
      state.counter--;
    },
    increase (state, action) {
      state.counter = state.counter + action.payload; 
    },
    toggle (state) {
      state.showCounter = !state.showCounter;
    },
  },
});



export default counterSlice;