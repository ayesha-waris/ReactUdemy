

import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialStates = {counter: 0, showCounter: true};
const counterSlice = createSlice({
  name:'counter',
  initialStates,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement (state) {
      state.counter--;
    },
    increase (state, action) {
      state.counter = state.counter + action.value;
    },
    toggle (state) {
      state.showCounter = !state.showCounter;
    }
  }
});



const store = configureStore({
  //for single stateSlice 
  reducer: counterSlice.reducer 
  //for multiple stateSlice use object (key value pairs)
});


export default store;

