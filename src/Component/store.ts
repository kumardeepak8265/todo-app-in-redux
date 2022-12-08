import {} from "react";
import { AnyAction, createStore, Reducer } from "redux";
import { TODO_DELETE, TODO_ADD, TODO_STATUS_CHANGE } from "./Action";
import { Todo } from "./Todo";

export type State = {
  todos: Todo[];
};
const initialState: State = {
  todos: [],
};
let nextId = 1;
const reducer: Reducer<State> = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case TODO_STATUS_CHANGE: {
      const { id, done } = action.payload;

      const newTodos = state.todos.map((t) => {
        if (t.id == id) {
          return { ...t, done: !done };
        }
        return t;
      });
      return { ...state, todos: newTodos };
    }
    case TODO_ADD: {
      const todoText = action.payload;
      const todo: Todo = { id: nextId, title: todoText, done: false };
      nextId++;
      return { ...state, todos: [...state.todos, todo] };
    }
    case TODO_DELETE: {
      const deleteId = action.payload;
      const filterTodo = state.todos.filter((t) => {
        if (t.id !== deleteId) {
          return { t };
        }
      });
      return { ...state, todos: filterTodo };
    }
    default:
      return state;
  }
};
const state = createStore(
  reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
export default state;
