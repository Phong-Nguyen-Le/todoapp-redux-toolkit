// export const todoListSelector = (state) => {
//   const todosRemaining = state.todoList.filter((todo) => todo.name.includes(state.filter.search))
//   return todosRemaining
// }

// export const searchTextSelector = (state) => state.filter.search;
import { createSelector } from '@reduxjs/toolkit';

export const searchTextSelector = (state) => state.filter.search;

export const todoListSelector = (state) => state.todoList;

export const filterStatusSelector = (state) => state.filter.status;

export const filterPrioritySelector = (state) => state.filter.priority;

export const todosRemainingSelector = createSelector(
    todoListSelector,
    searchTextSelector,
    filterStatusSelector,
    filterPrioritySelector,
    (todoList, searchText, status, priority) => {
        const todoListAfterSearch = todoList.filter((todo) =>
            todo.name.includes(searchText)
        );

        let todoListAfterStatus = todoListAfterSearch;
        if (status == "Completed") {
            todoListAfterStatus = todoListAfterSearch.filter(
                (todo) => todo.completed
            );
        } else if (status == "Todo") {
            todoListAfterStatus = todoListAfterSearch.filter(
                (todo) => !todo.completed
            );
        }

        let todoListAfterAll = !!priority.length
            ? todoListAfterStatus.filter((todo) =>
                  priority.includes(todo.priority)
              )
            : todoListAfterStatus;

        return todoListAfterAll;
    }
);

// todoList.filter(todo => todo.name.includes(searchText))
