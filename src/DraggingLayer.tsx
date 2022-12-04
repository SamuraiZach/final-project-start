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
    //const [formAdd, setFormAdd] = useState(false);
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
