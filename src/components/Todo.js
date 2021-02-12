import { CgRemove } from "react-icons/cg";
import Button from "react-bootstrap/Button";

export const Todo = ({ todo, index, completeTodo, removeTodo }) => {
    return (
        <div
            className="todo"
            style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
        >
            {todo.text}
            <div>
                <Button variant="info" onClick={() => completeTodo(index)}>
                    Complete
                </Button>{" "}
                <Button variant="info" onClick={() => removeTodo(index)}>
                    <CgRemove />
                </Button>{" "}
            </div>
        </div>
    );
};
