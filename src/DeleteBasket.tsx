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
        minHeight: "9rem",
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
    color: string;
    deleteBox: (value: string) => void;
}

export interface DustbinState {
    hasDropped: boolean;
    hasDroppedOnChild: boolean;
}

export const DeleteBin: FC<DustbinProps> = ({
    greedy,
    children,
    boxes,
    setBoxes,
    color,
    deleteBox
}) => {
    const [hasDropped, setHasDropped] = useState(false);
    const [hasDroppedOnChild, setHasDroppedOnChild] = useState(false);
    const [name, setName] = useState(" ");
    const [{ isOver, isOverCurrent }, drop] = useDrop(
        () => ({
            accept: ItemTypes.BOX,
            drop(item: object, monitor) {
                const didDrop = monitor.didDrop();
                const x = Object(item).id;
                console.log(x);
                setName(name + " " + x);
                deleteBox(Object(item).Name);
                setHasDropped(true);
                setHasDroppedOnChild(didDrop);
                setBoxes({
                    ...boxes,
                    [x]: {
                        top: Object(item).top,
                        left: Object(item).left,
                        title: Object(item).title,
                        display: "none",
                        Name: Object(item).Name,
                        Country: Object(item).Country,
                        Continent: Object(item).Continent,
                        Population_Country: Object(item).Population_Country,
                        Image: Object(item).Image,
                        PopularFood: [Object(item).PopularFood],
                        resetTop: Object(item).resetTop,
                        resetLeft: Object(item).resetLeft
                    }
                });
            },
            collect: (monitor) => ({
                isOver: monitor.isOver(),
                isOverCurrent: monitor.isOver({ shallow: true })
            })
        }),
        [greedy, setHasDropped, setHasDroppedOnChild, setName, deleteBox]
    );
    const text = "Delete Trip:";
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
                <span style={{ position: "relative" }}>
                    {name} {hasDroppedOnChild && " on child"}
                </span>
            )}
            <div>{children}</div>
        </div>
    );
};
