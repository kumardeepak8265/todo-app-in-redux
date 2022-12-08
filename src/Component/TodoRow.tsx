import { FC } from "react";
import { Todo } from "./Todo";
import { MdDeleteForever } from "react-icons/md";
export type TodoRowProps = {
  todos: Todo;
  onStatusChange: (id: number, done: boolean) => void;
  deleteTodo: (id: number) => void;
};

const TodoRow: FC<TodoRowProps> = ({ todos, onStatusChange, deleteTodo }) => {
  const { id, title, done } = todos;
  const onhandleChange = () => {
    onStatusChange(id, done);
  };
  const onhandleTodoDelete = () => {
    deleteTodo(id);
  };
  return (
    <div className="flex items-center">
      <input type="checkbox" checked={done} onChange={onhandleChange} />
      <p className="ml-2">{title}</p>
      <MdDeleteForever className="text-2xl" onClick={onhandleTodoDelete} />
    </div>
  );
};
TodoRow.defaultProps = {};
export default TodoRow;
