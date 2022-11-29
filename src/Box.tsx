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
    display: string;
    hideSourceOnDrag?: boolean;
    children?: ReactNode;
}

export const Box: FC<BoxProps> = ({
    id,
    left,
    top,
    display,
    hideSourceOnDrag,
    children
}) => {
    const [{ isDragging }, drag] = useDrag(
        () => ({
            type: ItemTypes.BOX,
            item: { id, left, top, display },
            collect: (monitor) => ({
                isDragging: monitor.isDragging()
            })
        }),
        [id, left, top, display]
    );

    if (isDragging && hideSourceOnDrag) {
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
