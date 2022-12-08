import { FC } from "react";
import { useDispatch } from "react-redux";
import { todoDelete, todoStatusChange } from "./Action";
import { Todo } from "./Todo";
import TodoRow from "./TodoRow";
type TodoListProps = {
  todos: Todo[];
};

const TodoList: FC<TodoListProps> = ({ todos }) => {
  const dispatch = useDispatch();
  const handleChange = (id: number, done: boolean) => {
    dispatch(todoStatusChange(id, done));
  };
  const onDeleteTodo = (id: number) => {
    dispatch(todoDelete(id));
  };
  return (
    <div>
      {todos.map((t) => (
        <TodoRow
          todos={t}
          key={t.id}
          onStatusChange={handleChange}
          deleteTodo={onDeleteTodo}
        ></TodoRow>
      ))}
    </div>
  );
};
TodoList.defaultProps = {};
export default TodoList;
