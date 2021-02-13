import React from "react";
import "./App.css";
import { TodoForm } from "./components/TodoForm";
import { Todo } from "./components/Todo";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";

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
            <Jumbotron>
                <h1>Game Lists</h1>
                <p>
                    This is a place where you can list games that you want to
                    play and cross them off when completed.
                </p>
            </Jumbotron>
            <div className="todo-list">
                <Card style={{ width: "390px" }}>
                    <Card.Body>
                        <Card.Title>Your list of games</Card.Title>
                        <Card.Text>
                            Add all the games you want to play here.
                        </Card.Text>
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
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};
