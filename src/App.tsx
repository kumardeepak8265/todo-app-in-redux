import { FC, useState } from "react";
import { useSelector } from "react-redux";
import NavBar from "./Component/NavBar";
import {
  completeTodoSelector,
  incompleteTodoSelector,
} from "./Component/Selectors";

import TodoCreateForm from "./Component/TodoCreateForm";
import TodoList from "./Component/TodoList";

const App: FC = () => {
  const [todoForm, setTodoForm] = useState(true);
  const todoComplete = useSelector(completeTodoSelector);
  const todoNotComplete = useSelector(incompleteTodoSelector);
  const onhandleFormControl = () => setTodoForm(!todoForm);
  return (
    <div>
      <NavBar></NavBar>
      <div className="sm:px-16 space-y-4 m-2">
        <h3 className="text-bold">things to do</h3>
        {todoForm && (
          <button
            onClick={onhandleFormControl}
            className="p-2 rounded-md bg-indigo-600 text-white"
          >
            ADD TODO
          </button>
        )}
        <TodoList todos={todoComplete}></TodoList>
        {!todoForm && (
          <TodoCreateForm todoForm={onhandleFormControl}></TodoCreateForm>
        )}

        <h3 className="text-bold">things done</h3>
        <TodoList todos={todoNotComplete}></TodoList>
      </div>
    </div>
  );
};

export default App;
