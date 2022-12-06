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
    valueofDropContainers: number;
    setDropContainer: React.Dispatch<React.SetStateAction<number>>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    PopulateTrips: any[];
    resetChildTrips: boolean;
    setCTreset: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Interactables: FC<InteractablesProp> = ({
    boxes,
    setBoxes,
    deleteBox,
    basketMove,
    valueofDropContainers,
    setDropContainer,
    PopulateTrips,
    resetChildTrips,
    setCTreset
}) => {
    return (
        <div>
            <div>
                <Container
                    boxes={boxes}
                    setBoxes={setBoxes}
                    deleteBox={deleteBox}
                    basketMove={basketMove}
                    setDropContainer={setDropContainer}
                    valueofDropContainers={valueofDropContainers}
                    PopulateTrips={PopulateTrips}
                    resetChildTrips={resetChildTrips}
                    setCTreset={setCTreset}
                />
            </div>
        </div>
    );
};

//<Button onClick={toggleAdd}>Add Place</Button>
// {formAdd === false ? null : <Form.Check></Form.Check>}
//toggleAdd which is for the forms or whatever
