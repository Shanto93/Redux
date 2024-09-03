import { useContext } from "react";
import { ToDoContext } from "../context/ToDoProvider";

type TInitial = {
  id: number;
  title: string;
  isCompleted: boolean;
};

const ToDoDisplay = () => {
  const { state, dispatch} = useContext(ToDoContext);
  return (
    <div>
      {state.map((item : TInitial) => (
        <>
          <p onClick={()=> dispatch({type: 'addCompleted', payload: item.id})} className={`cursor-pointer ${item.isCompleted? 'line-through':''}`}>{item.title}</p>
        </>
      ))}
    </div>
  );
};

export default ToDoDisplay;
