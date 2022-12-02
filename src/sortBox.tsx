/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { CSSProperties, FC, ReactNode } from "react";

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
    children?: ReactNode;
}
export const sortBox: FC<BoxProps> = ({ id, left, top, display, children }) => {
    return <div></div>;
};
export default sortBox;
