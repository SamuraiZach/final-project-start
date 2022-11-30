import type { FC } from "react";
import React from "react";
//import { useState } from "react";
import { Place } from "./Place";
import sample from "./Places.json";
//import { Form, Button } from "react-bootstrap";
import { Container } from "./Container";

export const Interactables: FC = () => {
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
    */

    return (
        <div>
            <div>
                <Container places={PLACES} />
            </div>
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
