import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";

export const AddGameForm = ({ addGame }) => {
    const [value, setValue] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        addGame(value);
        setValue("");
    };

    return (
        <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="game-name">Add game:</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    type="text"
                    placeholder="Enter game name here..."
                    aria-label="Game-name"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </InputGroup>
        </Form>
    );
};
