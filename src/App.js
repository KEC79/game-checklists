import React from "react";
import "./App.css";
import { AddGameForm } from "./components/AddGameForm";
import { GameItem } from "./components/GameItem";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";

import "bootstrap/dist/css/bootstrap.min.css";

export const App = () => {
    const [games, setGames] = React.useState([
        { text: "Game 1", isCompleted: false },
    ]);

    const addGame = (text) => {
        const newGames = [...games, { text }];
        setGames(newGames);
    };

    const completeGame = (index) => {
        const newGames = [...games];
        newGames[index].isCompleted = true;
        setGames(newGames);
    };

    const removeGame = (index) => {
        const newGames = [...games];
        newGames.splice(index, 1);
        setGames(newGames);
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
            <div className="games-list">
                <Card style={{ width: "390px" }}>
                    <Card.Body>
                        <Card.Title>Your list of games</Card.Title>
                        <Card.Text>
                            Add all the games you want to play here.
                        </Card.Text>
                        {games.map((game, index) => (
                            <GameItem
                                key={index}
                                index={index}
                                game={game}
                                completeGame={completeGame}
                                removeGame={removeGame}
                            />
                        ))}
                        <AddGameForm addGame={addGame} />
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};
