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
        minWidth: "9.5rem",
        maxWidth: "9.5rem",
        color: "white",
        backgroundColor,
        padding: "1rem",
        paddingTop: "1rem",
        margin: "1rem",
        textAlign: "center",
        float: "left",
        fontSize: "1rem"
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
        };
    };
    setBoxes: React.Dispatch<
        React.SetStateAction<{
            [key: string]: {
                top: number;
                left: number;
                title: string;
                display: string;
            };
        }>
    >;
}

export interface DustbinState {
    hasDropped: boolean;
    hasDroppedOnChild: boolean;
}

export const Dustbin: FC<DustbinProps> = ({
    greedy,
    children,
    boxes,
    setBoxes
}) => {
    const [hasDropped, setHasDropped] = useState(false);
    const [hasDroppedOnChild, setHasDroppedOnChild] = useState(false);
    const [name, setName] = useState(" ");
    const [{ isOver, isOverCurrent }, drop] = useDrop(
        () => ({
            accept: ItemTypes.BOX,
            drop(item: object, monitor) {
                const didDrop = monitor.didDrop();
                if (didDrop && !greedy) {
                    return;
                }
                console.log(item, Object(item).id);
                const x = Object(item).id;
                Object(item).display = "none";
                setHasDropped(true);
                setHasDroppedOnChild(didDrop);
                const b = name + " " + x;
                console.log(b);
                setName(name + " " + x);
                /*
                setBoxes(
                    update(boxes, {
                        [Object(item).id]: {
                            $merge: { top: 0, left: 0, display: "none" }
                        }
                    })
                );
                */
                //^ Disappear
                /*
                setBoxes(
                    update(boxes, {
                        [Object(item).id]: {
                            $merge: { top: 0, left: 0 }
                        }
                    })
                );
                //Just move out^
                */
                //moveBox(Object(item).id, 0, 0);
            },
            collect: (monitor) => ({
                isOver: monitor.isOver(),
                isOverCurrent: monitor.isOver({ shallow: true })
            })
        }),
        [greedy, setHasDropped, setHasDroppedOnChild, setName]
    );
    const text = "Trip Location:";
    let backgroundColor = "rgba(0, 0, 0, 1)";

    if (isOverCurrent || (isOver && greedy)) {
        backgroundColor = "darkgreen";
    }

    return (
        <div ref={drop} style={getStyle(backgroundColor)}>
            {text}
            <br />
            {hasDropped && (
                <span>
                    {name} {hasDroppedOnChild && " on child"}
                </span>
            )}
            <div>{children}</div>
        </div>
    );
};
