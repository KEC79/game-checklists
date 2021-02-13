import { CgRemove } from "react-icons/cg";
import Button from "react-bootstrap/Button";

export const GameItem = ({ game, index, completeGame, removeGame }) => {
    return (
        <div
            className="game-item"
            style={{ textDecoration: game.isCompleted ? "line-through" : "" }}
        >
            {game.text}
            <div>
                <Button
                    className="button"
                    variant="info"
                    onClick={() => completeGame(index)}
                >
                    Complete
                </Button>
                <Button
                    className="button"
                    variant="info"
                    onClick={() => removeGame(index)}
                >
                    <CgRemove />
                </Button>
            </div>
        </div>
    );
};
