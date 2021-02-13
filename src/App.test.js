import { render, screen } from "@testing-library/react";
import { App } from "./App";

describe("<AddGameForm/>", () => {
    it("does not render game list items when there are no games items", () => {
        render(<App />);
        const gameName = screen.queryByTestId("game-list-item");
        expect(gameName).not.toBeInTheDocument();
    });

    // it("completes game when complete game button is clicked", () => {
    //     render(<App />);
    //     const completeButton = screen.getByRole("button", {
    //         name: /complete/i,
    //     });
    //     userEvent.click(completeButton);
    //     const gameName = screen.getByText("My Fake Game");
    //     expect(gameName).toBeInTheDocument();
    //     expect(gameName).toHaveStyle("text-decoration: line-through");
    // });
});
