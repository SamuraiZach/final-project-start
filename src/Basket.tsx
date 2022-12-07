/* eslint-disable no-extra-parens */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-prototype-builtins */
import React, { useCallback } from "react";
import type { CSSProperties, FC, ReactNode } from "react";
import { useState } from "react";
import { DndProvider, useDrop } from "react-dnd";
import { ContainerState } from "./Container";
import { ItemTypes } from "./ItemTypes";
import update from "immutability-helper";
import { ChildBin } from "./ChildBasket";
import { HTML5Backend } from "react-dnd-html5-backend";
function getStyle(backgroundColor: string): CSSProperties {
    return {
        border: "1px solid rgba(0,0,0,0.2)",
        minHeight: "8rem",
        minWidth: "9.6rem",
        maxWidth: "9.6rem",
        color: "white",
        backgroundColor,
        padding: "1rem",
        paddingTop: "1rem",
        margin: "1rem",
        textAlign: "center",
        float: "left",
        left: "-15.6px",
        top: "-18px",
        fontSize: "1rem",
        position: "relative"
    };
}

export interface DustbinProps {
    greedy?: boolean;
    children?: ReactNode;
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
    color: string;
    value: number;
    basketMove: (item: object) => void;
    resetChildTrips: boolean;
    setCTreset: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface DustbinState {
    hasDropped: boolean;
    hasDroppedOnChild: boolean;
}

export const Dustbin: FC<DustbinProps> = ({
    greedy,
    children,
    color,
    basketMove,
    boxes,
    setBoxes,
    value,
    resetChildTrips,
    setCTreset
}) => {
    const [amountOfChild, setChild] = useState(1);
    const [hasDropped, setHasDropped] = useState(false);
    const [hasDroppedOnChild, setHasDroppedOnChild] = useState(false);
    const [plannerTotal, setPT] = useState(0);
    const [val, setVal] = useState(1);
    const [name, setName] = useState("");
    const [valueofDropContainers, setDropContainer] = useState(1);
    const childInstance = (i: number): ReactNode => {
        return (
            <div
                style={{
                    overflow: "hidden",
                    clear: "both",
                    margin: "-1rem",
                    position: "relative",
                    top: "50",
                    left: "0%"
                }}
            >
                <ChildBin
                    i={i}
                    valueofDropContainers={valueofDropContainers}
                    setDropContainer={setDropContainer}
                    boxes={boxes}
                    setBoxes={setBoxes}
                    color={"grey"}
                    basketMove={basketMove}
                ></ChildBin>
            </div>
        );
    };
    let PopulateChildren = [];
    for (let i = 0; i < valueofDropContainers; i++) {
        PopulateChildren.push(childInstance(i));
    }
    if (resetChildTrips === true) {
        PopulateChildren = [];
        setDropContainer(0);
    }
    const [{ isOver, isOverCurrent }, drop] = useDrop(
        () => ({
            accept: ItemTypes.BOX,
            drop(item: object, monitor) {
                const didDrop = monitor.didDrop();
                const x = Object(item).id;
                setVal(val + 1);
                setName(name + "\n" + val + ": " + x);
                setHasDropped(true);
                setHasDroppedOnChild(didDrop);
            },
            collect: (monitor) => ({
                isOver: monitor.isOver(),
                isOverCurrent: monitor.isOver({ shallow: true })
            })
        }),
        [greedy, setHasDropped, setHasDroppedOnChild, setName]
    );
    const text =
        "Trip Planner " +
        (value + 1) +
        " ->" +
        "\n" +
        "Saved POIs: " +
        (valueofDropContainers - 1);
    const colors = color;
    const backgroundColor = colors;
    return (
        <div ref={drop} style={getStyle(backgroundColor)}>
            {text}
            <br />
            <div>
                <DndProvider backend={HTML5Backend}>
                    <div>{PopulateChildren}</div>
                </DndProvider>
            </div>
        </div>
    );
};
