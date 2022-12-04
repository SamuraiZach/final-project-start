import type { FC } from "react";
import React from "react";
//import { useState } from "react";
//import { Form, Button } from "react-bootstrap";
import { Container } from "./Container";

export interface InteractablesProp {
    sortValue: string;
    boxes: {
        [key: string]: {
            top: number;
            left: number;
            title: string;
            display: string;
            Name: string;
            Country: string;
            Continent: string;
            Population_Country: number;
            Image: string;
            PopularFood: string[];
            resetTop: number;
            resetLeft: number;
        };
    };
    setBoxes: React.Dispatch<
        React.SetStateAction<{
            [key: string]: {
                top: number;
                left: number;
                title: string;
                display: string;
                Name: string;
                Country: string;
                Continent: string;
                Population_Country: number;
                Image: string;
                PopularFood: string[];
                resetTop: number;
                resetLeft: number;
            };
        }>
    >;
    deleteBox: (value: string) => void;
    basketMove: (item: object) => void;
}

export const Interactables: FC<InteractablesProp> = ({
    boxes,
    setBoxes,
    deleteBox,
    basketMove
}) => {
    return (
        <div>
            <div>
                <Container
                    boxes={boxes}
                    setBoxes={setBoxes}
                    deleteBox={deleteBox}
                    basketMove={basketMove}
                />
            </div>
        </div>
    );
};

//<Button onClick={toggleAdd}>Add Place</Button>
// {formAdd === false ? null : <Form.Check></Form.Check>}
//toggleAdd which is for the forms or whatever
