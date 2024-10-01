import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

const store = configureStore({
  reducer: counterReducer,
});

export default store;

// import {combineReducers} from "@reduxjs/toolkit";
// import todoReducer from "../redux/todoSlice";
// import counterReducer from "./counterSlice";

// export default combineReducers({
//     todos:todoReducer,
//     counter: counterReducer
// })
