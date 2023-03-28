// import {createStore} from 'redux'
// import rootReducer from './reducer'
// import { composeWithDevTools} from 'redux-devtools-extension'


// const composedEnhancers = composeWithDevTools()

// const store = createStore(rootReducer, composedEnhancers)



// export default store

import {configureStore} from '@reduxjs/toolkit'
import { filterSlice } from '../components/Filters/filterSlice'
import { todoListSlice } from '../components/TodoList/todoSlice'

const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    todoList: todoListSlice.reducer,
  }
})

export default store