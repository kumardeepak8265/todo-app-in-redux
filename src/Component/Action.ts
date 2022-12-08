export const TODO_ADD = "todo added";
export const TODO_DELETE = "todo delete";
export const TODO_STATUS_CHANGE = "todo status change";
export const todoAdd = (todo: string) => {
  return { type: TODO_ADD, payload: todo };
};
export const todoDelete = (id: number) => {
  return { type: TODO_DELETE, payload: id };
};
export const todoStatusChange = (id: number, done: boolean) => ({
  type: TODO_STATUS_CHANGE,
  payload: { id, done },
});
