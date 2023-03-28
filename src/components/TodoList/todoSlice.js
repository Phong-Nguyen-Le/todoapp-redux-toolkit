// const initState = [
//     { id: 1, name: 'learn Yoga', completed: false, priority: "Medium"},
//     { id: 2, name: 'learn Redux', completed: true, priority: "Medium"},
//     { id: 3, name: 'learn Javascript', completed: false, priority: "Medium"},
//   ]


// const todoListReducer = (state=initState, action) => {
//   // console.log({state, action})
//   switch(action.type) {
//     case 'todoList/addTodo':
//       return [
//           ...state,
//           action.payload
//         ]
//     case 'todoList/todoCompletedChange':

//       return  state.map(todo => todo.id === action.payload ? {...todo, completed: !todo.completed}: todo)
        
//       default: return state
//   }
// }


// export {todoListReducer}


import { createSlice } from "@reduxjs/toolkit";
export  const todoListSlice = createSlice({
  name: 'todoList',
  initialState: [
        { id: 1, name: 'learn Yoga', completed: false, priority: "Medium"},
        { id: 2, name: 'learn Redux', completed: true, priority: "Medium"},
        { id: 3, name: 'learn Javascript', completed: false, priority: "Medium"},
      ],
  reducers: {
    addTodo: (state,action) => {
      state.push(action.payload)
    },
    todoCompletedChange: (state, action) => {
      const currentTodo = state.find(todo => todo.id == action.payload)
      currentTodo.completed = !currentTodo.completed
    }
  }
    
})