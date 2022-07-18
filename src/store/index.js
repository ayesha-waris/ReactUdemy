import counterSlice from "./counterSlice";
import authSlice from "./authSlice";
import { configureStore } from "@reduxjs/toolkit";



const store = configureStore({
    //for single stateSlice 
  // reducer: counterSlice.reducer 
  //for multiple stateSlice use object (key value pairs)
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});


export const authActions = authSlice.actions;
export const counterActions = counterSlice.actions;
export default store;

