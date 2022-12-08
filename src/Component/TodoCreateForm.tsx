import { ChangeEvent, FC, useState } from "react";

import { useDispatch } from "react-redux";
import { todoAdd } from "./Action";
type TodoCreateFormProps = {
  todoForm: () => void;
};
const TodoCreateForm: FC<TodoCreateFormProps> = ({ todoForm }) => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const buttonDisable = value.trim().length == 0;

  const onhandleClick = () => {
    dispatch(todoAdd(value));
    todoForm();
    setValue("");
  };
  const onhandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onhandleCancleClick = () => {
    todoForm();
  };
  return (
    <div className="flex flex-col p-4 border-2 border-gray-300 space-y-6">
      <input
        className="p-2 border-2 border-gray-800 "
        onChange={onhandleChange}
      />
      <div className="flex ">
        <button
          className="p-2 rounded-md bg-indigo-600 text-white"
          onClick={onhandleClick}
          disabled={buttonDisable}
        >
          SAVE
        </button>
        <button
          className="p-2 rounded-md bg-white ml-2 border-2 border-gray-400"
          onClick={onhandleCancleClick}
        >
          CANCLE
        </button>
      </div>
    </div>
  );
};
TodoCreateForm.defaultProps = {};
export default TodoCreateForm;
