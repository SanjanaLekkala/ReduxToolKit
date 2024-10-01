import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import counterReducer from "../counterRedux/counterSlice";
// import reducer from "../counterRedux/"



const store = configureStore({
    // reducer: todoReducer,
    // counter: counterReducer,
    reducer : {
        todos:todoReducer,
        counters: counterReducer 
    }
    // reducer
})

export default store;