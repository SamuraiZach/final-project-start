import React from "react";
import type { CSSProperties, FC, ReactNode } from "react";
import { useDrag } from "react-dnd";

import { ItemTypes } from "./ItemTypes";

const style: CSSProperties = {
    position: "absolute",
    cursor: "move",
    width: 60,
    height: 60
};

export interface BoxProps {
    id: string;
    left: number;
    top: number;
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
    children?: ReactNode;
}

export const Box: FC<BoxProps> = ({
    id,
    left,
    top,
    title,
    display,
    Name,
    Country,
    Continent,
    Population_Country,
    Image,
    PopularFood,
    resetTop,
    resetLeft,
    children
}) => {
    const [{ isDragging }, drag] = useDrag({
        type: ItemTypes.BOX,
        item: {
            id,
            left,
            top,
            title,
            display,
            Name,
            Country,
            Continent,
            Population_Country,
            Image,
            PopularFood,
            resetTop,
            resetLeft
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    });

    if (isDragging) {
        return <div ref={drag} />;
    }
    return (
        <div
            className="box"
            ref={drag}
            style={{ ...style, left, top, display: display }}
            data-testid="box"
        >
            {children}
        </div>
    );
};
