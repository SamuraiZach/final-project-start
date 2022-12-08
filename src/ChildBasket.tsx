import React from "react";
import type { CSSProperties, FC, ReactNode } from "react";
import { useState } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
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
        top: "-10%",
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
    valueofDropContainers: number;
    setDropContainer: React.Dispatch<React.SetStateAction<number>>;
    color: string;
    i: number;
    basketMove: (item: object) => void;
}

export interface DustbinState {
    hasDropped: boolean;
    hasDroppedOnChild: boolean;
}

export const ChildBin: FC<DustbinProps> = ({
    greedy,
    color,
    basketMove,
    valueofDropContainers,
    setDropContainer,
    i
}) => {
    const [val, setVal] = useState(1);
    const [name, setName] = useState("");
    const [{ isOver, isOverCurrent }, drop] = useDrop(
        () => ({
            accept: ItemTypes.BOX,
            drop(item: object) {
                const x = Object(item).id;
                setVal(val + 1);
                setName(x);

                basketMove(item);
                setDropContainer(valueofDropContainers + 1);
            },
            collect: (monitor) => ({
                isOver: monitor.isOver(),
                isOverCurrent: monitor.isOver({ shallow: true })
            })
        }),
        [greedy, setName, basketMove]
    );
    const text = "Place " + (i + 1);
    const colors = color;
    let backgroundColor = colors;

    if (isOverCurrent || (isOver && greedy)) {
        backgroundColor = "darkgreen";
    }

    return (
        <div ref={drop} style={getStyle(backgroundColor)}>
            {text}
            <br />
            <li style={{ position: "relative", display: "inline" }}>{name}</li>

            <div></div>
        </div>
    );
};
