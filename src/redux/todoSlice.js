import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id: 1,
      text: "Car washing",
    },
    {
      id: 2,
      text: "Cleaning",
    },
    {
      id: 3,
      text: "Groceries Shopping",
    },
  ],
};
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    //here we can declare the reducers function in a normal function pattern or in arrow function
    addTodo(state, action) {
      //normal function
      state.tasks.push({ id: Date(), text: action.payload });
    },
    removeTodo: (state, action) => {
      //arrow function
      state.tasks = state.tasks.filter((task) => task.id !== action.payload); //If task.id is not equal to action.payload, that task remains in the new array. Otherwise, it is excluded.
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
