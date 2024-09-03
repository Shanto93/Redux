import { useContext, useState, type FormEvent } from "react";
import { ToDoContext } from "../../context/ToDoProvider";
import ToDoDisplay from "../../ToDoDisplay/ToDoDisplay";


const ToDoForm = () => {
  const { state, dispatch } = useContext(ToDoContext);
  const [task, setTask] = useState("");
  console.log(state);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const todo = {
      id: Math.random().toString(36).substr(2, 10),
      title: task,
      isCompleted: false,
    };
    dispatch({ type: "addToDo", payload: todo });
  };

  console.log(state);
  return (
    <div>
      <div>
        <h2 className="text-2xl font-semibold text-center">Add TODO</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-2">
          <label className="text-xl mt-3" htmlFor="ToDo">
            Task:
          </label>
          <input
            onBlur={(e) => setTask(e.target.value)}
            className="border border-black px-3 py-2 rounded-lg"
            type="text"
            name="todo"
            id="todo"
          />
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
      <ToDoDisplay></ToDoDisplay>
    </div>
  );
};

export default ToDoForm;
