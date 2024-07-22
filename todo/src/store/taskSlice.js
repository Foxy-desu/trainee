import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: []
};

// createSlice function uses Immer, so we already have a copy of the state and 
//can easily modify it without having to worry about immutability.
export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action)=> {
      state.tasks.push(action.payload);
    },
    removeTask: (state, action)=> {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    editTask: (state, action)=> {
      state.tasks = state.tasks.map(task => {
        if (task.id === action.payload.id) {
          task.title = action.payload.title;
          task.description = action.payload.description;
          task.completionTime = action.payload.completionTime;
        }
        return task;
      })
    }
  }
});

export const {addTask, removeTask, editTask} = taskSlice.actions;
export default taskSlice.reducer;