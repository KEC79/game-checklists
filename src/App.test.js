jest.mock("./persistence/gameStore");
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { App } from "./App";
import { useGameStore } from "./persistence/gameStore";

describe("<AddGameForm/>", () => {
    it("does not render game list items when there are no games items", () => {
        useGameStore.mockReturnValue({
            setGames: jest.fn(),
            getGames: jest.fn(),
        });
        render(<App />);
        const gameName = screen.queryByTestId("game-list-item");
        expect(gameName).not.toBeInTheDocument();
    });

    it("completes game when complete game button is clicked", () => {
        useGameStore.mockReturnValue({
            setGames: jest.fn(),
            getGames: () => {
                return [{ text: "game 1", isComplete: false }];
            },
        });
        render(<App />);
        const completeButton = screen.getByRole("button", {
            name: /complete/i,
        });
        userEvent.click(completeButton);
        const gameName = screen.getByText("game 1");
        expect(gameName).toBeInTheDocument();
        expect(gameName).toHaveStyle("text-decoration: line-through");
    });

    it("removes game when remove game button is clicked", () => {
        useGameStore.mockReturnValue({
            setGames: jest.fn(),
            getGames: () => {
                return [{ text: "game 1", isComplete: false }];
            },
        });
        render(<App />);
        const removeButton = screen.getByTestId("remove-button");
        userEvent.click(removeButton);
        expect(screen.queryByText("game 1")).not.toBeInTheDocument();
    });
});
