/* eslint-disable no-extra-parens */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-prototype-builtins */
import React, { useCallback } from "react";
import type { CSSProperties, FC, ReactNode } from "react";
import { useState } from "react";
import { useDrop } from "react-dnd";
import { ContainerState } from "./Container";
import { ItemTypes } from "./ItemTypes";
import update from "immutability-helper";
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
    basketMove: (item: object) => void;
}

export interface DustbinState {
    hasDropped: boolean;
    hasDroppedOnChild: boolean;
}

export const NewPlannerBin: FC<DustbinProps> = ({
    greedy,
    children,
    color,
    basketMove,
    valueofDropContainers,
    setDropContainer
}) => {
    const [hasDropped, setHasDropped] = useState(false);
    const [hasDroppedOnChild, setHasDroppedOnChild] = useState(false);
    const [val, setVal] = useState(1);
    const [name, setName] = useState("");
    const [{ isOver, isOverCurrent }, drop] = useDrop(
        () => ({
            accept: ItemTypes.BOX,
            drop(item: object, monitor) {
                const didDrop = monitor.didDrop();
                setDropContainer(valueofDropContainers + 1);
            },
            collect: (monitor) => ({
                isOver: monitor.isOver(),
                isOverCurrent: monitor.isOver({ shallow: true })
            })
        }),
        [
            greedy,
            setHasDropped,
            setHasDroppedOnChild,
            setName,
            basketMove,
            setDropContainer
        ]
    );
    const text = "Drop for new planner";
    const colors = color;
    let backgroundColor = colors;
    if (hasDroppedOnChild) {
        setName(name);
    }
    if (isOverCurrent || (isOver && greedy)) {
        backgroundColor = "darkgreen";
    }

    return (
        <div ref={drop} style={getStyle(backgroundColor)}>
            {text}
            <br />
            {hasDropped && (
                <li style={{ position: "relative", display: "inline" }}>
                    {name}
                </li>
            )}
            <div></div>
        </div>
    );
};
