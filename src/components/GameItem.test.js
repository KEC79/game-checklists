import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { GameItem } from "./GameItem";

describe("<GameItem/>", () => {
    it("render un-completed games correctly", () => {
        const fakeGame = {
            text: "My Fake Game",
            isCompleted: false,
        };
        render(<GameItem game={fakeGame} />);

        const gameName = screen.getByText("My Fake Game");
        expect(gameName).toBeInTheDocument();
        expect(gameName).not.toHaveStyle("text-decoration: line-through");
        const completeButton = screen.getByRole("button", {
            name: /complete/i,
        });
        expect(completeButton).toBeInTheDocument();
        const removeButton = screen.getByTestId("remove-button");
        expect(removeButton).toBeInTheDocument();
    });

    it("render completed games correctly", () => {
        const fakeGame = {
            text: "My Fake Game",
            isCompleted: true,
        };
        render(<GameItem game={fakeGame} />);
        const gameName = screen.getByText("My Fake Game");
        expect(gameName).toBeInTheDocument();
        expect(gameName).toHaveStyle("text-decoration: line-through");
    });

    it("calls complete when button for completing is clicked", () => {
        const fakeGame = {
            text: "My Fake Game",
            isCompleted: false,
        };
        const mockCompleteGame = jest.fn();
        render(
            <GameItem
                game={fakeGame}
                index={99}
                completeGame={mockCompleteGame}
            />
        );
        const completeButton = screen.getByRole("button", {
            name: /complete/i,
        });
        userEvent.click(completeButton);
        expect(mockCompleteGame).toHaveBeenCalledWith(99);
    });

    it("calls remove when button for removing is clicked", () => {
        const fakeGame = {
            text: "My Fake Game",
            isCompleted: false,
        };
        const mockRemoveGame = jest.fn();
        render(
            <GameItem game={fakeGame} index={99} removeGame={mockRemoveGame} />
        );
        const removeButton = screen.getByTestId("remove-button");
        userEvent.click(removeButton);
        expect(mockRemoveGame).toHaveBeenCalledWith(99);
        //expect(mockRemoveGame.mock.calls[0][0]).toBe(99);
    });
});
