import {configureStore} from '@reduxjs/toolkit';
import taskReducer from './taskSlice.js';

//this function sets all tasks from redux store to local storage,
//and after that passes action forward (for other moddleware functions and reducers to use) 
const tasksMiddleware = ({getState}) => {
  return (next) => (action) => {
    const result = next(action);
    localStorage.setItem('tasks', JSON.stringify(getState()));
    return result;
  }
};

//this function is used to check local storage after the app starts and load data to redux store if there is any.
// very useful to prevent data reset on page refreshes
const getTasksFromLocalStorage =()=> {
  if(localStorage.getItem('tasks') !== null && localStorage.getItem('tasks') !== 'undefined') {
    return JSON.parse(localStorage.getItem('tasks'));
  }
};

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
  preloadedState: getTasksFromLocalStorage(),
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(tasksMiddleware)
  }
});