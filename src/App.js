import React from "react";
import "./App.css";
import { TodoForm } from "./components/TodoForm";
import { Todo } from "./components/Todo";

import "bootstrap/dist/css/bootstrap.min.css";

export const App = () => {
    const [todos, setTodos] = React.useState([
        { text: "Game 1", isCompleted: false },
        { text: "Game 2", isCompleted: false },
        { text: "Game 3", isCompleted: false },
    ]);

    const addTodo = (text) => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
    };

    const completeTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
    };

    const removeTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <div className="app">
            <h2>Game To Do List</h2>
            <div className="todo-list">
                {todos.map((todo, index) => (
                    <Todo
                        key={index}
                        index={index}
                        todo={todo}
                        completeTodo={completeTodo}
                        removeTodo={removeTodo}
                    />
                ))}
                <TodoForm addTodo={addTodo} />
            </div>
        </div>
    );
};
