

import { createSlice, configureStore } from '@reduxjs/toolkit';

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

const initialAuthStates= {
  isAuthenticated: false

};
const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthStates,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});



const store = configureStore({
    //for single stateSlice 
  // reducer: counterSlice.reducer 
  //for multiple stateSlice use object (key value pairs)
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;

