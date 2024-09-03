import { useContext } from "react";
import { ToDoContext } from "../../context/ToDoProvider";

const ToDoForm = () => {
const {title} = useContext(ToDoContext);
console.log(title);
    return (
        <div>
            <h2>This is ToDo Form</h2>
        </div>
    );
};

export default ToDoForm;