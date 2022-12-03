import type { FC } from "react";
import React from "react";
//import { useState } from "react";
import { Place } from "./Place";
import sample from "./Places.json";
//import { Form, Button } from "react-bootstrap";
import { Container } from "./Container";
import { ContainerWest } from "./ContainerWest";
import { ContainerNorth } from "./ContainerNorth";
import { ContainerSouth } from "./ContainerSouth";
import { ContainerEast } from "./ContainerEast";

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
    sortValue,
    boxes,
    setBoxes,
    deleteBox,
    basketMove
}) => {
    //const [formAdd, setFormAdd] = useState(false);
    const PLACES = sample.map((place): Place => ({ ...place }));
    /*
    const temp = new Map([["k", ["d", "d"]]]);
    console.log(temp);
    const [test, testSet] = useState<{
        [key: string]: {
            top: number;
            left: number;
            title: string;
        };
    }>({});
    const initBoxes = (
        places: Place[],
        test: {
            [key: string]: {
                top: number;
                left: number;
                title: string;
            };
        }
    ) => {
        //test["a"]({ top: 2, left: 2, title: "tt" });
        for (let i = 0; i < 2; i++) {
            const name = places[i].Name;
            test.push;
        }
    };
    initBoxes(PLACES, test);
    */

    /*
    const toggleAdd = () => {
        if (formAdd) {
            setFormAdd(false);
        } else {
            setFormAdd(true);
        }
        return null;
    };
    West Side">West Side</option>
                        <option value="East Side">East Side</option>
                        <option value="North Side">North Side</option>
                        <option value="South Side">South Side</option>
    */
    if (sortValue === "All") {
        return (
            <Container
                places={PLACES}
                boxes={boxes}
                setBoxes={setBoxes}
                deleteBox={deleteBox}
                basketMove={basketMove}
            />
        );
    } else if (sortValue === "West Side") {
        return (
            <ContainerWest places={PLACES} boxes={boxes} setBoxes={setBoxes} />
        );
    } else if (sortValue === "North Side") {
        return (
            <ContainerNorth places={PLACES} boxes={boxes} setBoxes={setBoxes} />
        );
    } else if (sortValue === "South Side") {
        return (
            <ContainerSouth places={PLACES} boxes={boxes} setBoxes={setBoxes} />
        );
    } else if (sortValue === "East Side") {
        return (
            <ContainerEast places={PLACES} boxes={boxes} setBoxes={setBoxes} />
        );
    }
    return (
        <div>
            <div
                style={{
                    position: "absolute",
                    top: 713,
                    left: 30
                }}
            ></div>
        </div>
    );
};

//<Button onClick={toggleAdd}>Add Place</Button>
// {formAdd === false ? null : <Form.Check></Form.Check>}
//toggleAdd which is for the forms or whatever
