import type { FC } from "react";
import React from "react";
import { useCallback, useState } from "react";
import { Place } from "./Place";
import sample from "./Places.json";
import { Form, Button } from "react-bootstrap";
import { Container } from "./Container";

export const Example: FC = () => {
    const [hideSourceOnDrag, setHideSourceOnDrag] = useState(true);
    const [formAdd, setFormAdd] = useState(false);
    const PLACES = sample.map((place): Place => ({ ...place }));
    const toggle = useCallback(
        () => setHideSourceOnDrag(!hideSourceOnDrag),
        [hideSourceOnDrag]
    );
    const toggleAdd = () => {
        if (formAdd) {
            setFormAdd(false);
        } else {
            setFormAdd(true);
        }
        return null;
    };
    return (
        <div>
            <div>
                <Container
                    hideSourceOnDrag={hideSourceOnDrag}
                    places={PLACES}
                />
            </div>
            <div
                style={{
                    position: "absolute",
                    top: 713,
                    left: 30
                }}
            >
                <Button onClick={toggleAdd}>Add Place</Button>
                {formAdd === false ? null : <Form.Group></Form.Group>}
            </div>
            <div
                style={{
                    position: "absolute",
                    top: 750,
                    left: 154
                }}
            >
                <p>
                    <label htmlFor="hideSourceOnDrag">
                        <input
                            id="hideSourceOnDrag"
                            type="checkbox"
                            role="checkbox"
                            checked={hideSourceOnDrag}
                            onChange={toggle}
                        />
                        <small>Hide the source item while dragging</small>
                    </label>
                </p>
            </div>
        </div>
    );
};
