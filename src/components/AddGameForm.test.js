import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AddGameForm } from "./AddGameForm";

describe("<AddGameForm/>", () => {
    it("render correctly", () => {
        render(<AddGameForm />);
        const inputBox = screen.getByRole("textbox", { name: /Game-name/i });
        expect(inputBox).toBeInTheDocument();
        const addOn = screen.getByText(/Add Game:/i);
        expect(addOn).toBeInTheDocument();
    });

    it("adds a game when user enters one", () => {
        const mockAddGame = jest.fn();
        render(<AddGameForm addGame={mockAddGame} />);
        const inputBox = screen.getByRole("textbox", { name: /Game-name/i });
        userEvent.type(inputBox, "Test Game{enter}");
        expect(mockAddGame).toHaveBeenCalled();
    });

    it("accepts the users input", () => {
        const mockAddGame = jest.fn();
        render(<AddGameForm addGame={mockAddGame} />);
        const inputBox = screen.getByRole("textbox", { name: /Game-name/i });
        userEvent.type(inputBox, "Test Game");
        expect(inputBox).toHaveValue("Test Game");
    });

    it("clears the input box after adding a game", () => {
        render(<AddGameForm addGame={() => {}} />);
        const inputBox = screen.getByRole("textbox", { name: /Game-name/i });
        userEvent.type(inputBox, "Test Game{enter}");
        expect(inputBox).toHaveValue("");
    });

    it("does not create a game if the user presses enter without supplying a name", () => {
        const mockAddGame = jest.fn();
        render(<AddGameForm addGame={mockAddGame} />);
        const inputBox = screen.getByRole("textbox", { name: /Game-name/i });
        userEvent.type(inputBox, "{enter}");
        expect(mockAddGame).not.toHaveBeenCalled();
    });
});
