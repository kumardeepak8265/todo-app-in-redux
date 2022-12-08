import { State } from "./store";

export const completeTodoSelector = (s: State) => s.todos.filter((t) => t.done);
export const incompleteTodoSelector = (s: State) =>
  s.todos.filter((t) => !t.done);
